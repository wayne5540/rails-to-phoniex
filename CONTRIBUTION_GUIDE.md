# Contribution guide

First of all, **THANK YOU** for willing to improve this project and hope you find this project useful.
If you want to add more mapping data, there are 2 ways to do this:

## 1. Open a PR

All the data is stored at [/src/data/mapping.json](/src/data/mapping.json), you can go there and add/update/delete them.

An basic example of mapping data:

```js
{
  "name": "Devise", // ruby gem's name
  "url": "https://github.com/plataformatec/devise", // ruby gem's homepage
  "description": "Flexible authentication solution for Rails with Warden.", // ruby gem's description
  "alias_names": [ // non-case-sensitive, for better searching
    "Devise"
  ],
  "elixir_plugins": [
    {
      "name": "guardian", // exilir plugin's name
      "url": "https://github.com/ueberauth/guardian", // exilir plugin's homepage
      "description": "Elixir Authentication" // exilir plugin's description
    },
    {
      "name": "coherence",
      "url": "https://github.com/smpallen99/coherence",
      "description": "Coherence is a full featured, configurable authentication system for Phoenix"
    }
  ]
}
```

**All keys are required**, however, some values are optionals, described below:

* **name (required) (String):** ruby gem's name, also as uniq identifier in this project, you should check if there is exist one before add a new one
* **url (optional) (String):** ruby gem's source code or homepage
* **description (optional) (String):** ruby gem's source code or homepage
* **alias_names (required) ([String]):** this filed will be used as search functionality, it's **NOT case-sensitive** and gem's name should be included in alias_name
* **elixir_plugins (required) ([Object]):** Array of elicir plugins  
  * name (required) (String): Elixir plugin's name
  * url (optional) (String): Elixir plugin's source code or homepage
  * description (optional) (String): Elixir plugin's source code or homepage


## 2. Open an issue

1. [Open a new issue](https://github.com/wayne5540/rails-to-phoniex/issues/new?template=new_mapping.md&labels=add+mapping)
2. Filled the issue template and submit it

