# Node.js - handling files

Examples taken from the following article : [From callbacks to fs/promises to handle the file system in Node.js - dev.to/mrm8488 - 20180529](https://dev.to/mrm8488/from-callbacks-to-fspromises-to-handle-the-file-system-in-nodejs-56p2)

- `old-school-callbacks.js` shows the legacy way of dealing with files with callbacks
- `manual-promisify.js` shows how to wrap callbacks into promises (or with lib like bluebird)
- `promisify-using-util-api.js` shows how to use [`util.promisify()` api](https://nodejs.org/api/util.html#util_util_promisify_original) introduced in node@8
- `promisify-using-util-api-with-async-await.js` shows how to use [`util.promisify()` api](https://nodejs.org/api/util.html#util_util_promisify_original) but with `async`/`await`
- `using-fs-promises-api.js` shows how to use [`fs/promises` api](https://nodejs.org/api/fs.html#fs_fs_promises_api) introduced in node@10
