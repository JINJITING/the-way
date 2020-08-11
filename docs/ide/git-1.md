# Git 命令

## 查看提交的作者
```
git log --pretty=format:"%[xx]" [commit-hash] 
# 通用格式，[xx] 为具体的变量，[commit-hash] 为具体的提交记录 hash 值
# 例子


```
<!-- ## 重写历史 —— filter-branch -->

### git 本地同步远程更改
```sh
git remote show origin   # 查看远程 origin 的信息
git remote prune origin  # 移除远程仓库不存在的分支
```
### 批量删除
```sh
# 批量删除分支
git branch -a | grep { variable } | xargs git branch -D # 命令
git branch -a | grep hotfix | xargs git branch -D # 示例
```