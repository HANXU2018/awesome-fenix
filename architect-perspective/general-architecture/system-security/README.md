# 安全架构

即使只限定在“软件架构设计”这个语境下，系统安全仍然是一个很大的话题。我们谈论的计算机系统安全，远不仅指“防御系统被黑客攻击”这样狭隘的“安全”。架构安全性至少应包括了（不限于）以下这些问题的具体解决方案：

- [**认证**](./authentication)（Authentication）：系统如何正确分辨出操作用户的真实身份？
- [**授权**](./authorization)（ Authorization）：系统如何控制一个用户该看到哪些数据、能操作哪些功能？
- [**凭证**](./credentials)（Credentials）：系统如何保证它与用户之间的承诺是双方当时真实意图的体现，是准确、完整且不可抵赖的？
- [**保密**](./confidentiality)（Confidentiality）：系统如何保证敏感数据无法被包括系统管理员在内的内外部人员所窃取、滥用？
- [**传输**](./transport-security)（Transport Security）：系统如何保证通过网络传输的信息无法被第三方窃听、篡改和冒充？
- [**验证**](./verification)（Verification）：系统如何确保提交到每项服务中的数据是合乎规则的，不会对系统稳定性、数据一致性、正确性产生风险？

上面这些安全相关的问题，解决起来确实是既繁琐复杂，又难以或缺。值得庆幸的是这一部分内容基本上都是与具体系统、具体业务无关的通用性问题、这意味着它们会存在着业界通行的，已被验证过是行之有效的解决方案，乃至已经形成某一些行业标准，不需要我们自己从头去构思如何解决。后面我们将会通过标准的方案，逐一探讨以上问题的主流处理方法。

还有其他一些安全相关的内容，主要由管理、运维、审计方面负责，尽管软件架构也需要配合参与，但不列入本文的讨论范围之中，譬如：安全审计、系统备份与恢复、防治病毒、信息系统安全法规与制度、计算机防病毒制度、保护私有信息规则，等等。