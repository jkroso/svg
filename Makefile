
serve: node_modules
	@node_modules/serve/bin/serve -Sljop 0

node_modules: package.json
	@packin install --meta $< --folder $@

template.js: template.jade
	@echo "module.exports = '`jade < $<`'" > $@

.PHONY: serve
