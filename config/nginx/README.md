# Development nginx setup

This repository comes with already generated certificates. You can use these or create your own self signed certificates. This nginx will not be used on production.

## Create your self signed certificates
The certificates are created using [mkcert](https://github.com/FiloSottile/mkcert)

- `brew install mkcert` (on Guest network)
- `mkcert -install`
- Create them: `mkcert local.foo.test "*.foo.test" localhost` (in this folder)
- Put certificate in keychain access (file is in 'User/**/mkcert*.cer')
- *Make sure the name of the certificates are the same as in .gitignore (default names of mkcert). The proxy will take precedence when these files exist.*
- *local.foo.test will only work if you add this to your local Host file.*
