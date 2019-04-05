# TypeScript

## 一、TypeScript的介绍

​	TypeSript的本质：相当于JavaScript的增强版。

TypeScript和JavaScript的对比：

> - 1、TypeScript是一个应用程序级的JavaScript开发语言。
> - 2、TypeScript是JavaScript的超集，可以编译成纯JavaScipt。
> - 3、TypeScript跨浏览器、跨操作系统、跨主机、且开源。由于最后它编译成了JavaScript，所以只要能运行JS的地方，都可以运行我们写的程序，设置在node.js里。
> - 4、TypeScript始于JavaScript，终于JavaScript。
> - 5、TypeScript可以重写JavaScript代码，调用流行的JavaScript库。
> - 6、TypeScript提供了类、模块和接口，更易于构建组件和维护



## 二、开发环境的安装

### (一)安装Node.js

​	安装Node.js非常简单，只要到Node官网下载一个最新版本就可以了：[nodejs.org/zh-cn/.在win…](https://link.juejin.im?target=https%3A%2F%2Fnodejs.org%2Fzh-cn%2F.%25E5%259C%25A8windows%25E4%25B8%258A%25E7%259A%2584%25E5%25AE%2589%25E8%25A3%2585%25E6%2596%25B9%25E6%25B3%2595%25E5%2592%258C%25E5%25AE%2589%25E8%25A3%2585QQ%25E4%25B8%2580%25E6%25A0%25B7%25E3%2580%2582%25E6%2588%2591%25E8%25BF%2599%25E9%2587%258C%25E5%25B0%25B1%25E4%25B8%258D%25E9%2587%258D%25E5%25A4%258D%25E6%258F%258F%25E8%25BF%25B0%25E4%25BA%2586%25E3%2580%2582)安装好后，可以打开命令行工具，同时按下win+R，然后输入cmd就可以打开，打开后输入

```
node -v
npm -v
```

​	如果看到版本号说明已经安装成功了，看不到版本号就说明你的node.js没有安装成功。

### (二)安装TypeScript包

​	在刚才的命令行窗口继续输入一下命令

```js
npm i typescript -g
tsc --version
```

​	需要注意的是：如果你是mac电脑，要使用`sudo npm install typescript -g`指令进行安装

### (三)编写HelloWord程序

1、初始化项目：进入你的编程文件夹后，可以使用 `npm init -y ` 来初始化项目，生成 【package.json】文件。

2、生成【tsconfig.json】文件，在终端输入 `tsc --init` 生成该文件：它是一个 TypeScript 项目的配置文件，可以通过读取它来设置 TypeScript 编译器的编译参数。【注意文件的基本配置：默认只支持 ES5语法，需要手动修改】

3、安装 **@types/node**，使用 `npm install @types/node --dev-save`进行安装。这个主要解决模块的声明文件问题。

4、编写 【HelloWorld.ts】文件，然后进行保存。代码如下：

```js
let a:string = 'HelloWorld'
console.log(a)
```

5、在 Vscode的任务菜单下，打开运行生成任务，然后选择 tsc ： 构建 -tsconfig.json ，这是就会生成一个 【HelloWorld.js】文件

6、在终端中输入`node helloWord.js`就可以看到结果了



## 三、变量类型

​	TypeScript最大的一个特点及上司变量的**强类型**，也就是说，在变量声明的同时，我们必须给它一个类型。

TypeScript 中数据类型有：

> - 1、undefined：
>
> - 2、null：空类型
>
> - 3、any：任意类型
>
> - 4、void：空类型
>
> - 5、enum：枚举类型
>
> - 6、tuple：元祖类型
>
> - 7、number：数值类型
>
>   几种特殊的 number类型
>
>   - 1、NaN：意思是不是一个数值
>   - 2、Infinity：正无穷
>   - 3、-Infinity：负无穷
>
> - 8、string：字符串类型
>
> - 9、boolean：布尔类型
>
> - 10、array：数组类型
>
> - 11、object ： 非原始类型

### (一)enum类型

这个世界有很多值是多个并且是固定的，比如：

- 世界上人的类型：男人、女人、中性
- 一年的季节：春、夏、秋、冬 ，有四个结果。

这种变量的结果是固定的几个数据时，就是我们使用枚举类型的最好时机：

demo01_3.ts

```js
enum REN{ nan , nv ,yao}
console.log(REN.yao)  //返回了2，这是索引index，跟数组很像。
```

如果我们想给这些枚举赋值，可以直接使用`=`,来进行赋值。

```js
enum REN{
    nan = '男',
    nv = '女',
    yao= '妖'
}
console.log(REN.yao)  //返回了妖 这个字
```

### (二)any 类型

​	一个写惯了前端的人，有时候不自觉的就分不清类型了。这是个不好的习惯，也是前端的痛，就因为这个原因，JavaScript也多次被人诟病说大型项目不适合用JavaScript。但是习惯一旦养成，改是需要时间和磨练的。TypeScript友好的为我们提供了一种特殊的类型`any`，比如我们在程序中不断变化着类型，又不想让程序报错，这时候就可以使用any了。

```js
var t:any =10 
t = "jspang"
t = true
console.log(t)
```

### (三)tuple 元祖类型

​	元祖是一种特殊的数组，元祖类型允许表示一个**已知元素数量和类型的数组**，各元素的类型不必相同。比如，你可以定义一对值分别为string和number类型的元祖。元祖在实际开发中使用的非常少，大家了解一下就可以了，不做过多介绍。

```js
//声明一个元祖类型
let x : [string,number]
//正确的初始化
x = ['hello',10]
//错误的初始化方法
x = [10,'hello']
```

### (四) void 

​	某种程度上来说，`void`类型像是与`any`类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 `void`：

```js
function warnUser(): void {
    console.log("This is my warning message");
}
```

声明一个`void`类型的变量没有什么大用，因为你只能为它赋予`undefined`和`null`：

```js
let unusable: void = undefine	
```

### (五) object 非原始类型

​	`object`表示非原始类型，也就是除`number`，`string`，`boolean`，`symbol`，`null`或`undefined`之外的类型。

使用`object`类型，就可以更好的表示像`Object.create`这样的API。例如：

```js
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```
## 四、TypeScript的函数

### (一)定义函数

​	函数就相当于一个工具，我们可以把功能相近的需求封装成一个独立的代码块，每次传入不同的变量或参数，就可以实现不同的结果。

​	在TypeScript里定义函数跟JavaScript稍微有些不同。

```js
function search(age:number):string{
    return '找到了'+ age +'岁的小姐姐'
}
let age:number = 18
let result:string = search(age)
console.log(result)
```

需要注意的是：

- 1、声明(定义)函数必须加function关键字
- 2、函数名与变量名一样，命名规则按照标识符规则
- 3、函数参数可有可无，多个参数之间用逗号隔开
- 4、每个参数，参数有名字与类型组成，之间用逗号隔开
- 5、函数的返回值可有可无，没有返回值时，返回类型为 `void`
- 6、大括号中是函数体、

### (二)函数的形参和实参

#### 1、形参

​	TypeScript的函数参数是比较灵活的，它不像那些早些出现的传统语言那么死板。在TypeScript中，函数形参分为：

- 可选形参
- 默认形参
- 剩余参数形参

...等

**(1)有可选参数的函数**

​	可选参数，就是我们定义形参的时候，就可以定义一个可传可不传的参数。这种参数，在定义函数的时候通过 `?`标注。

```js
function search(age:number,stature?:string):string{
    // stature 就是 可选参数
    let yy:string = ''
    yy = '找到了'+ age + '岁'
    if(stature !== undefined){
        yy = yy + stature
    }
    return  yy+'小姐姐'
}

let result:string = search(22,'大长腿')
```

**(2)有默认参数的函数**

​	**有默认参数**就更好理解了，就是我们不传递的时候，他会给我们一个默认值，而不是`undefined`了	

```js
function search(age:number=18,stature='大胸'):string{
    let y:string = ''
    y='找到了'+age+'岁'+stature+'的小姐姐'
   return y
    
}
```









​	