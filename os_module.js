const os = require("os");
console.log(
    "Architecture", "=", os.arch(), "\n",
    "Free RAM", "=", os.freemem()/(1024*1024*1024), "\n",
    "Total RAM", "=", os.totalmem()/(1024*1024*1024), "\n",
    "Host Name", "=", os.hostname(), "\n",
    "Platform", "=", os.platform(), "\n",
    "User Info", "=", os.userInfo(), "\n",
);