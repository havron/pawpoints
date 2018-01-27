.PHONY: dev github

MSG='bork bork bork'

dev:
	rails server

github:
	git add -A
	git commit -m "${MSG}"
	git push
