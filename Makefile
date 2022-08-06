.PHONY: dist test
default: help

install:
	yarn

new:
	node build/bin/new.js $(filter-out $@,$(MAKECMDGOALS))

storybook:
	yarn storybook

clear:
	yarn clean

clear-workspace:
	yarn workspaces run del

build-all:
	yarn build

publish:
	yarn lerna


help:
	@echo "   \033[35mmake\033[0m \033[1m命令使用说明\033[0m"
	@echo "   \033[35mmake install\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  安装依赖"
	@echo "   \033[35mmake new <component-name> [中文名]\033[0m\t---  创建新组件 package. 例如 'make new button 按钮'"
	@echo "   \033[35mmake storybook\033[0m\t\033[0m\t\033[0m\t---  开启storybook"
	@echo "   \033[35mmake clear\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  清除yarn缓存'"
	@echo "   \033[35mmake clear-workspace\033[0m\t\033[0m\t\033[0m\t---  清除分区dist文件夹'"
	@echo "   \033[35mmake build-all\033[0m\t\033[0m\t\033[0m\t---  全部分区打包'"
	@echo "   \033[35mmake publish\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  发布'"