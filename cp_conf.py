import os
import shutil

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

            # 存在しない and draftじゃない
            # ドモルガン: not(is_exists or is_draft)
            if not is_exists and not is_draft:
                print(f)
                # 作成日などもコピー
                shutil.copy2(f, t)

                is_printed = False

    if is_printed:
        print('Nothing.')


if __name__ == "__main__":
    main()
