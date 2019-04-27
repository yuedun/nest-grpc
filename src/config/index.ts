const env = process.env.NODE_ENV;
const config = require('./config.' + env);
export default config as Config ;

// 可以编写工具，自动根据配置文件的定义生成interface
interface Config {
    env: string;
}
