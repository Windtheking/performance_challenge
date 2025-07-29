
# Product database project with local API in json

## A Fluidly functioning project for API practicing written in html css and js with json db

This project is a custom made database project worked with Riwi company to produce an evidence of learning and usage of json databases for the consumption of an API. Every piece of this project is a completed code in which you will find the following:

- Custom made json db
- Resources and API-like JS files
- HTML for rendering JS properties
- CSS methods for more interesting colors and appearances

## Folder Organization

The project is organized as follows:

```plaintext
project_root/
├── login.html
├── Readme.md
├── public/
│   ├── Banner2.png
│   ├── Google Icon.png
│   ├── Large Riwi Icon.png
│   └── Short Riwi Icon.png
├── src/
│   ├── json/
│   │   ├── db.json
│   │   └── db1.json
│   ├── pages/
│   │   ├── dashboard.html
│   │   ├── practice_login.html
│   │   ├── practice_register.html
│   │   └── register.html
│   ├── Scripts/
│   │   ├── event_controller.js
│   │   ├── login.js
│   │   ├── register.js
│   │   ├── users_controller.js
│   │   └── Utilities/
│   │       ├── EmailValidation.js
│   │       ├── EmptyValidation.js
│   │       ├── fetch.js
│   │       └── Hash_generator.js
│   └── styles/
│       ├── dashboards.css
│       ├── login.css
│       ├── login1.css
│       ├── register.css
│       └── register1.css
```

## Easiest way to obtain best results from running this project

1. Download npm and json-server
    - with the following command in console:
    ```
    npm install json-server
    ```
2. Download all zip files and decompress in an isolated folder
3. Run files with VS Live Server
4. Run local database in JSON
    - with the command:
    ```
    json-server --watch src/json/db.json
    ```
5. Enter your preferred browser and watch the project

_______________
## Future features

- Modularization of tabs
- More eye-friendly display in the screen colors
- Error targeting for any future appearing bugs

---

## Goodbye!

Thank you for checking out this project. I hope it helps you learn and experiment with APIs and local JSON databases. If you have any suggestions or improvements, feel free to contribute!

---

If you want to edit or upgrade the code, fork the repository and make your changes in a separate branch. Once ready, submit a pull request with a clear description of your improvements. This way, your contributions can be reviewed and merged efficiently. Happy coding!
