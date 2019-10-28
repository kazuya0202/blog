#!/bin/bash

IFS='
'

path="src/_posts/"
fname="draft*"

# if [ -z "$1" ]; then
#     echo "Require arguments."
#     echo " * 1. true-false"
#     echo " * 2. false-true"

#     exit
# fi

# if [ "$1" = "false-true" ]; then
#     # true to false
#     echo -e " * false -> true\n"

#     # ファイル名に draft がつくなら変える
#     rg.exe -g "$fname" --files "$path" | while IFS= read -r file; do
#         echo "$file"
#         sed -i -e "s/draft: false/draft: true/" "$file"
#     done


# elif [ "$1" = "true-false" ]; then
# false to true

if [ "$1" = "dev:sh" ]; then
    # from (yarn run dev:2)
    echo -e " * true -> false\n"

    rg.exe -g "$fname" --files "$path" | while IFS= read -r file; do
        echo "$file"
        sed -i -e "s/draft: true/draft: false/" "$file"
    done

    echo ""
    # sleep 30 &
    cmd.exe /c yarn dev
    echo ""

    echo -e " * false -> true"
    rg.exe -g "$fname" --files "$path" | while IFS= read -r file; do
        echo "$file"
        sed -i -e "s/draft: false/draft: true/" "$file"
    done
else
    # from (console)
    echo -e " * false -> true"
    rg.exe -g "$fname" --files "$path" | while IFS= read -r file; do
        echo "$file"
        sed -i -e "s/draft: false/draft: true/" "$file"
    done
fi
