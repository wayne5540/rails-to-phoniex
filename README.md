# Rails to Phoenix

Find exilir libraries by ruby gem's name

### https://rails-to-phoniex.com/


## Add more data

First of all, **THANK YOU** for willing to improve this project and hope you find this project useful.

If you want to add more mapping data, there are 2 ways to do this:

1. If you are a git user, you can edit [/src/data/mapping.json](/src/data/mapping.json) and send a PR.
2. You can [Open an issue](https://github.com/wayne5540/rails-to-phoniex/issues/new?template=new_mapping.md&labels=add+mapping).

You can check [Contribution Guide](CONTRIBUTION_GUIDE.md) for more information.

## Development

This project use [VueJS](https://vuejs.org/) to render HTML. To start develop new feature, you need to:

```
git clone https://github.com/wayne5540/rails-to-phoniex.git
git cd rails-to-phoniex
yarn install
yarn serve
```

This will open `http://localhost:8080` at a new tab on your browser, and it has built in hot reload feature so you can start playing around by changing text in [src/App.vue](/src/App.vue).


## TODO

* A better search algorithm
* SEO

## License

[Apache V2](LICENSE)

