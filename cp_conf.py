import os
import shutil
import datetime
import pathlib


src_dir = 'src'
test_dir = 'test'


def main():
    is_printed = True

    for root, dirs, files in os.walk(test_dir):
        for f in files:
            f = f'{root}/{f}'
            f = f.replace('\\', '/')

            t = f.replace(test_dir, src_dir)
            is_exists = os.path.exists(t)

            # ファイル名にdraftをつけてるからそれで判断
            is_draft = 'draft' in f

            is_copied = False

            # 存在しない and draftじゃない
            # ドモルガン: not(is_exists or is_draft)
            if not is_exists and not is_draft:
                print(f)
                # 作成日などもコピー
                shutil.copy2(f, t)

                is_printed = False
                is_copied = True

            if '.vuepress' in f and not is_copied:
                if is_updated(f, t):
                    is_printed = False
                    try:
                        os.remove(t)
                        shutil.copy2(f, t)
                    except FileNotFoundError:
                        print(f'FileNotFoundError - {t}')

    if is_printed:
        print('Nothing.')


def is_updated(f, t):
    fp = pathlib.Path(f)
    tp = pathlib.Path(t)

    if not os.path.exists(tp):
        return False

    f_dt = datetime.datetime.fromtimestamp(fp.stat().st_ctime)
    t_dt = datetime.datetime.fromtimestamp(tp.stat().st_ctime)

    is_updated_file = f_dt > t_dt

    if is_updated_file:
        print(f)
        print(f_dt, t_dt)
        print()

        return True
    return False


if __name__ == "__main__":
    main()
