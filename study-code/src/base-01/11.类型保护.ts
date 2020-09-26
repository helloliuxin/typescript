/*
  类型保护:
    TypeScript能够在特定区块中保证变量属于某种确定的类型
    可以在此区块中放心地引用类型的属性，或者调用此类型的方法

    不同的判断方法有不同的使用场景：
      typeof：判断一个变量的类型
      instanceof：判断一个实例是否属于某个类
      in：判断一个属性是否属于某个对象
      类型保护函数：某些判断可能不是一条语句能够搞定的，需要更多复杂的逻辑，适合封装到一个函数内
*/

enum Type { Strong, Week }

class Java {
  helloJava() {
    console.log('Hello Java');
  }
  java: any
}

class JavaScript {
  helloJavaScript() {
    console.log('Hello JavaScript');
  }
  js: any
}

function isJava(lang: Java | JavaScript): lang is Java { // 类型谓词
  return (lang as Java).helloJava !== undefined;
}

// 定义一个方法 如果为强类型返回Java类的实例否则返回JavaScript的实例,然后执行实例的方法
function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();

  // 0、类型断言
  // if ((lang as Java).helloJava) {
  //   (lang as Java).helloJava()
  // } else {
  //   (lang as JavaScript).helloJavaScript();
  // }
  
  // 创建类型保护区块的几种方法
  // 1、instanceof
  // if (lang instanceof Java) {
  //   lang.helloJava();
  // } else {
  //   lang.helloJavaScript();
  // }

  // 2、in
  // if ('java' in lang) {
  //   lang.helloJava();
  // } else {
  //   lang.helloJavaScript();
  // }

  // 3、typeof
  // if (typeof x === 'string') {
  //   console.log(x.length);
  // } else {
  //   console.log(x.toFixed(2));
  // }

  // 4、编写类型保护函数
  if (isJava(lang)) {
    lang.helloJava();
  } else {
    lang.helloJavaScript();
  }

  return lang;
}

getLanguage(Type.Strong, 1);