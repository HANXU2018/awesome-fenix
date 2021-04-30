(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{595:function(t,a,s){"use strict";s.r(a);var n=s(11),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"验证"}},[t._v("验证")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("验证（Verification）")]),t._v(" "),s("p",[t._v("系统如何确保提交到每项服务中的数据是合乎规则的，不会对系统稳定性、数据一致性、正确性产生风险？")])]),t._v(" "),s("p",[t._v("数据验证与程序如何编码是密切相关的，许多开发者都不会把它归入安全的范畴之中。但请细想一下，关注“你是谁”（认证）、“你能做什么”（授权）等问题是很合理的安全，关注“你做得对不对”（验证）不也同样合理吗？从数量来讲，数据验证不严谨而导致的安全问题比其他安全攻击导致的要多得多；而风险上讲，由数据质量导致的问题，风险有高有低，真遇到高风险的数据问题，面临的损失不一定就比被黑客拖库来得小。")]),t._v(" "),s("p",[t._v("相比其他富有挑战性的安全措施，如防御与攻击两者缠斗的精彩，数学、心理、社会工程和计算机等跨学科知识的结合运用，数据验证确实有些无聊、枯燥，这项常规的工作在日常的开发中贯穿于代码的各个层次，每个程序员都肯定写过。但这种常见的代码反而是迫切需要被架构约束的，缺失的校验影响数据质量，过度的校验不会使得系统更加健壮，某种意义上反而会制造垃圾代码，甚至有副作用。请来看看下面这个实际的段子：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('前  端： 提交一份用户数据（姓名:某, 性别:男, 爱好:女, 签名:xxx, 手机:xxx, 邮箱:null）\n控制器： 发现邮箱是空的，抛ValidationException("邮箱没填")\n前  端： 已修改，重新提交\n安  全： 发送验证码时发现手机号少一位，抛RemoteInvokeException("无法发送验证码")\n前  端： 已修改，重新提交\n服务层： 邮箱怎么有重复啊，抛BusinessRuntimeException("不允许开小号")\n前  端： 已修改，重新提交\n持久层： 签名字段超长了插不进去，抛SQLException("插入数据库失败，SQL：xxx")\n…… ……\n前  端： 你们这些坑管挖不管埋的后端，各种异常都往前抛！\n用  户： 这系统牙膏厂生产的？\n')])])]),s("p",[t._v("最基础的数据问题可以在前端做表单校验来处理，但服务端验证肯定也是要做的，看完了上面的段子后，请想一想，服务端应该在哪一层去做校验？可能会有这样的答案：")]),t._v(" "),s("ul",[s("li",[t._v("在Controller层做，在Service层不做。理由是从Service开始会有同级重用，出现ServiceA.foo(params)调用ServiceB.bar(params)时，就会对params重复校验了两次。")]),t._v(" "),s("li",[t._v("在Service层做，在Controller层不做。理由是无业务含义的格式校验已在前端表单验证处理过，有业务含义的校验，放在Controller层无论如何不合适。")]),t._v(" "),s("li",[t._v("在Controller、Service层各做各的。Controller做格式校验，Service层做业务校验，听起来很合理，但这其实就是上面段子中被嘲笑的行为。")]),t._v(" "),s("li",[t._v("还有其他一些意见，譬如还有提在持久层做校验，理由是这是最终入口，把守好写入数据库的质量最重要。")])]),t._v(" "),s("p",[t._v("上述的讨论大概是不会有统一、正确结论，但是在Java里确实是有验证的标准做法，笔者提倡的做法是把校验行为从分层中剥离出来，不是在哪一层做，而是在Bean上做。即Java Bean Validation。从2009年的"),s("a",{attrs:{href:"https://beanvalidation.org/1.0/spec/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSR 303"),s("OutboundLink")],1),t._v("的1.0，到2013年的"),s("a",{attrs:{href:"https://jcp.org/en/jsr/detail?id=349",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSR 349"),s("OutboundLink")],1),t._v("更新的1.1，到目前最新的2017年发布的"),s("a",{attrs:{href:"https://beanvalidation.org/2.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSR 380"),s("OutboundLink")],1),t._v("，定义了Bean验证的全套规范。单独将验证提取、封装，可以获得不少好处：")]),t._v(" "),s("ul",[s("li",[t._v("对于无业务含义的格式验证，可以做到预置。")]),t._v(" "),s("li",[t._v("对于有业务含义的业务验证，可以做到重用，一个Bean被用于多个方法用作参数或返回值是很常见的，针对Bean做校验比针对方法做校验更有价值。利于集中管理，譬如统一认证的异常体系，统一做国际化、统一给客户端的返回格式等等。")]),t._v(" "),s("li",[t._v("避免对输入数据的防御污染到业务代码，如果你的代码里面如果很多下面这样的条件判断，就应该考虑重构了："),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一些已执行的逻辑")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someParam "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RuntimeExcetpion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"客官不可以！"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("利于多个校验器统一执行，统一返回校验结果，避免用户踩地雷、挤牙膏式的试错体验。")])]),t._v(" "),s("p",[t._v("据笔者所知，国内的项目使用Bean Validation的并不少见，但多数程序员都只使用到它的Built-In Constraint来做一些与业务逻辑无关的通用校验，即下面这堆注解，含义基本上看类名就能明白")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Null")]),t._v("、"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@NotNull")]),t._v("、"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AssertTrue")]),t._v("、"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AssertFalse")]),t._v("、"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Min")]),t._v("、"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Max")]),t._v("、"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@DecimalMin")]),t._v("、"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@DecimalMax")]),t._v("、"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Negative")]),t._v("、"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@NegativeOrZero")]),t._v("、"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Positive")]),t._v("、"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PositiveOrZeor")]),t._v("、"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Szie")]),t._v("、"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Digits")]),t._v("、"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Pass")]),t._v("、"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PastOrPresent")]),t._v("、"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Future")]),t._v("、"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@FutureOrPresent")]),t._v("、"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Pattern")]),t._v("、"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@NotEmpty")]),t._v("、"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@NotBlank")]),t._v("、"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Email")]),t._v("\n")])])]),s("p",[t._v("但是与业务相关的校验往往才是最复杂的校验，将简单的校验交给Bean Validation，而把复杂的校验留给自己，这简直是买椟还珠故事的程序员版本。其实以Bean Validation的标准方式来做才对业务校验是非常优雅的，以Fenix's Bookstore的在用户资源上的两个方法为例：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* 创建新的用户\n*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@POST")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Response")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createUser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Valid")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@UniqueAccount")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Account")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CommonResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("op")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createAccount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* 更新用户信息\n*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PUT")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@CacheEvict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#user.username"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Response")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateUser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Valid")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AuthenticatedAccount")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@NotConflictAccount")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Account")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CommonResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("op")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateAccount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("注意其中的三个自定义校验注解，它们的含义分别是：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("@UniqueAccount")]),t._v("：传入的用户对象必须是唯一的，不与数据库中任何已有用户的名称、手机、邮箱产生重复。")]),t._v(" "),s("li",[s("code",[t._v("@AuthenticatedAccount")]),t._v("：传入的用户对象必须与当前登录的用户一致。")]),t._v(" "),s("li",[s("code",[t._v("@NotConflictAccount")]),t._v("：传入的用户对象中的信息与其他用户是无冲突的，譬如将一个注册用户的邮箱，修改成与另外一个已存在的注册用户一致的值，这便是冲突。")])]),t._v(" "),s("p",[t._v("这里的需求很容易理解，注册新用户时，应约束不与任何已有用户的关键信息重复；而修改自己的信息时，只能与自己的信息重复，而且只能修改当前登录用户的信息。这些约束规则不仅仅为这两个方法服务，它们可能会在用户资源中的其他入口被使用到，乃至在其他分层的代码中被使用到，在Bean上做校验就能一揽子地覆盖上述这些使用场景。下面代码是这三个自定义注解对应校验器的实现类：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthenticatedAccountValidator")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AccountValidation")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthenticatedAccount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initialize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthenticatedAccount")]),t._v(" constraintAnnotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        predicate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthenticAccount")]),t._v(" loginUser "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthenticAccount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SecurityContextHolder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAuthentication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPrincipal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("loginUser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UniqueAccountValidator")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AccountValidation")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UniqueAccount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initialize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UniqueAccount")]),t._v(" constraintAnnotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        predicate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("repository"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("existsByUsernameOrEmailOrTelephone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUsername")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEmail")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTelephone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NotConflictAccountValidator")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AccountValidation")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NotConflictAccount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initialize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NotConflictAccount")]),t._v(" constraintAnnotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        predicate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collection")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Account")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" collection "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" repository"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findByUsernameOrEmailOrTelephone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUsername")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEmail")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTelephone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将用户名、邮件、电话改成与现有完全不重复的，或者只与自己重复的，就不算冲突")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" collection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("collection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" collection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("iterator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这样业务校验便和业务逻辑就完全分离开来，在需要校验时用"),s("code",[t._v("@Valid")]),t._v("注解自动触发，或者通过代码手动触发执行，可根据你们项目的要求，将这些注解应用于控制器、服务层、持久层等任何层次的代码之中。此外，校验结果不满足时的提示信息，也便于统一处理，如提供默认值、提供国际化支持（这里没做）、提供统一的客户端返回格式（创建一个用于"),s("code",[t._v("ConstraintViolationException")]),t._v("的异常处理器来实现，代码中有但这里没有贴出来），以及批量执行全部校验，避免出开篇那个段子中挤牙膏的尴尬。")]),t._v(" "),s("p",[t._v("对于Bean与Bean校验器，笔者另外有两条编码建议。第一条是对校验项预置好默认的提示信息，这样当校验不通过时用户能获得明确的修正提示，以下是代码示例：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 表示一个用户的信息是无冲突的\n * \n * “无冲突”是指该用户的敏感信息与其他用户不重合，譬如将一个注册用户的邮箱，修改成与另外一个已存在的注册用户一致的值，这便是冲突\n **/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Documented")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Retention")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RUNTIME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("FIELD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" METHOD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PARAMETER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Constraint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("validatedBy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AccountValidation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NotConflictAccountValidator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NotConflictAccount")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("message")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"用户名称、邮箱、手机号码与现存用户产生重复"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("groups")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Payload")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("payload")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("另外一条建议是将不带业务含义的格式校验注解放到Bean的类定义之上，将带业务逻辑的校验放到Bean的类定义的外面。这两者的区别是放在类定义中的注解能够自动运行，而放到类外面这需要想前面代码那样，明确标出注解时才会运行。譬如用户账号实体中的部分代码为：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Account")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseEntity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@NotEmpty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"用户不允许为空"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@NotEmpty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"用户姓名不允许为空"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" avatar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("regexp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1\\\\d{10}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"手机号格式不正确"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" telephone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Email")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"邮箱格式不正确"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" email"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这些校验注解都直接放在类定义中，每次执行校验的时候它们都会被运行。由于Bean Validation是Java的标准规范，它执行的频率可能比编写代码的程序所预想的要更高，譬如使用Hibernate来做持久化时，便会自动执行Data Object上的校验注解。对于那些不带业务含义的注解，运行是不需要其他外部资源参与的，不会调用远程服务、访问数据库，这种校验重复执行并没有什么成本。")]),t._v(" "),s("p",[t._v("但带业务逻辑的校验，通常就需要外部资源参与执行，这不仅仅是多消耗一点时间和运算资源的问题，由于很难保证依赖的每个服务都是幂等的，重复执行校验很可能会带来额外的副作用。因此应该放到外面给让使用者自行判断是否要触发。")]),t._v(" "),s("p",[t._v("还有一些“需要触发一部分校验”的非典型情况，譬如“新增”操作A需要执行全部校验规则，“修改”操作B中希望不校验某个字段，“删除”操作C中希望改变某一条校验规则，这时候要就要启用分组校验来处理，设计一套“新增”、“修改”、“删除”这样的标识类，置入到校验注解的"),s("code",[t._v("groups")]),t._v("参数中去实现。")])])}),[],!1,null,null,null);a.default=e.exports}}]);