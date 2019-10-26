from codecs import encode
import os
import shutil

src_dir = 'src'
test_dir = 'test'


def main():
    for root, dirs, files in os.walk(test_dir):
        # for d in dirs:
        #     print(f'{root}\\{d}')
        for f in files:
            f = f'{root}\\{f}'
            f = f.replace('\\', '/')
            # print(f)

            t = f.replace(test_dir, src_dir)
            is_exists = os.path.exists(t)

            # 中身draftにしないから意味ない
            # if os.path.splitext(f)[1] == '.md':
            #     with open(f, encoding='utf-8') as txt:
            #         datas = txt.readlines()
            #         for data in datas:
            #             if 'draft: true' in data:
            #                 print(f)

            # ファイル名にdraftをつけてるからそれで判断
            is_not_draft = 'draft' not in f

            if not is_exists and is_not_draft:
                print(f)
                # print(t)
                # 作成日などもコピー
                shutil.copy2(f, t)


if __name__ == "__main__":
    main()
