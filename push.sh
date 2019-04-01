echo ""
echo -e "\033[32m 1.准备添加到本地仓库 \033[0m"
echo ""
git status
git add .
echo ""
echo -e "\033[32m 2.已添加到本地仓库 \033[0m"
echo ""
read -p "请输入本次推送描述:" desc
git commit -m $desc
echo ""
echo -e "\033[32m 3.正在推送到远程仓库 \033[0m"
echo ""
git push origin master
echo ""
echo -e "\033[32m 4.完毕 \033[0m"
echo ""
echo -e "\033[32m 请按回车继续 \033[0m"
read n


