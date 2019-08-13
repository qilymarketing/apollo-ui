NAME   	:= qily/apollo-ui
TAG    	:= $$(git rev-parse --short HEAD)
IMG    	:= ${NAME}:${TAG}
LATEST 	:= ${NAME}:latest

git-hooks:
	test -d .git/hooks || mkdir .git/hooks
	cp -f .git-hooks/* .git/hooks
	chmod a+x .git/hooks/*