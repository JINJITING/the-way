(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{377:function(s,a,t){"use strict";t.r(a);var e=t(42),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"git-命令-基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-命令-基础"}},[s._v("#")]),s._v(" Git 命令 —— 基础")]),s._v(" "),t("h2",{attrs:{id:"_1-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置"}},[s._v("#")]),s._v(" 1.配置")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git config --global user.name '[username]'       # 配置全局用户名\ngit config --global user.email '[email address]' # 配置全局邮箱\n# 不使用 --global，配置当前仓库\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_2-创建仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建仓库"}},[s._v("#")]),s._v(" 2.创建仓库")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git init <directory>    # 初始化仓库（本地创建）\ngit clone [repository] <directory> # 克隆仓库（远程克隆）\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"_3-分支操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-分支操作"}},[s._v("#")]),s._v(" 3.分支操作")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git branch               # 列出本地分支\ngit branch -r            # 列出远程分支\ngit branch -a            # 列出所有分支\ngit branch -m [branch]   # 修改当前分支名\ngit branch [branch]      # 在当前分支基础上创建新分支，依然留着当前分支\ngit checkout -b [branch] # 在当前分支基础上创建新分支，并切换到新分支\ngit checkout [branch]    # 切换到指定分支\ngit branch --set-upstream [branch] [remote-branch] # 将指定分支关联到远程分支\ngit merge [branch]       # 合并指定分支到当前分支 \ngit branch -d [branch]   # 删除指定本地分支\ngit push -d origin [branch]    # 删除指定远程分支\ngit branch -dr [remote/branch] # 删除指定远程分支\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"_4-同步远程仓库-代码拉取、推送"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-同步远程仓库-代码拉取、推送"}},[s._v("#")]),s._v(" 4.同步远程仓库（代码拉取、推送）")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git remote -v            # 查看所有远程仓库\ngit remote show [remote] # 查看某个远程仓库\ngit remote add [remote] [url] # 添加远程仓库\ngit remote rm [remote]   # 删除某个远程仓库\ngit remote rename [old] [new] # 重命名某个远程仓库\ngit fetch <remote>       # 拉取远程仓库的修改\ngit pull <remote> <branch> # 拉取远程仓库的修改，并与本地分支合并，即 pull 等于 fetch+merge \ngit push <remote> <branch> # 推送指定分支到远程仓库\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"_5-提交修改文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-提交修改文件"}},[s._v("#")]),s._v(" 5.提交修改文件")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# git add 将 workspace 工作区中的修改提交到 Stage 暂存区\ngit add .               # 提交所有文件\ngit add [file1] [file2] # 提交指定文件\ngit add [dir]           # 提交指定目录\ngit commit -m [message] # 提交暂存区到本地仓库\ngit commit --amend -m [message] # 修改上一次的提交，如果代码变化则替换上一次的提交\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"_6-查看信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-查看信息"}},[s._v("#")]),s._v(" 6.查看信息")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git status             # 显示变更文件的状态\ngit log                # 显示当前分支的提交历史\ngit log --stat         # 显示提交历史以及每次变更的文件\ngit log -S [keyword]   # 根据关键词搜索历史\ngit log -p [file]      # 显示指定文件的每一次 diff\ngit show               # 显示最新一次提交的具体修改\ngit diff               # 显示暂存区与工作区的差异\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"_7-撤销操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-撤销操作"}},[s._v("#")]),s._v(" 7.撤销操作")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git reset --hard [commit] # 重置当前分支的 HEAD 为指定 commit，同时重置暂存区和工作区\ngit reset --keep [commit] # 重置当前分支的 HEAD 为指定 commit，但保持暂存区和工作区\ngit revert [commit]       # 新建一个 commit 来撤销指定 commit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_8-标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-标签"}},[s._v("#")]),s._v(" 8.标签")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git tag              # 列出所有本地标签\ngit tag [tag]        # 基于最新提交创建标签\ngit tag -d [tag]     # 删除标签\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);