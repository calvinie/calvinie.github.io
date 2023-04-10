import{_ as t,X as c,Y as r,$ as e,a1 as i,a2 as a,a0 as n,Z as o,C as d}from"./framework-3ae3a606.js";const u={},v=e("h1",{id:"sql-leetcode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sql-leetcode","aria-hidden":"true"},"#"),n(" SQL-leetcode")],-1),p=e("blockquote",null,[e("p",null,"本文展示leetcode SQL题目解法 [TOC]")],-1),m={class:"table-of-contents"},b=e("h2",{id:"相关题目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),n(" 相关题目")],-1),h={id:"_1378-使用唯一标识码替换员工id",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#_1378-使用唯一标识码替换员工id","aria-hidden":"true"},"#",-1),x={href:"https://leetcode.cn/problems/replace-employee-id-with-the-unique-identifier/",target:"_blank",rel:"noopener noreferrer"},g=o(`<h4 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目：</h4><p>难度： <code>简单</code></p><p><code>Employees</code> 表：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| name          | varchar |
+---------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>id 是这张表的主键。 这张表的每一行分别代表了某公司其中一位员工的名字和 ID 。</p><p><code>EmployeeUNI</code> 表：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| unique_id     | int     |
+---------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(id, unique_id) 是这张表的主键。 这张表的每一行包含了该公司某位员工的 ID 和他的唯一标识码（unique ID）。</p><p>写一段SQL查询来展示每位用户的 唯一标识码（unique ID ）；如果某位员工没有唯一标识码，使用 null 填充即可。</p><p>你可以以 任意 顺序返回结果表。</p><p>查询结果的格式如下例所示。</p><p>eg：</p><p>输入： <code>Employees</code> 表:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+----------+
| id | name     |
+----+----------+
| 1  | Alice    |
| 7  | Bob      |
| 11 | Meir     |
| 90 | Winston  |
| 3  | Jonathan |
+----+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>EmployeeUNI</code> 表:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+-----------+
| id | unique_id |
+----+-----------+
| 3  | 1         |
| 11 | 2         |
| 90 | 3         |
+----+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------+----------+
| unique_id | name     |
+-----------+----------+
| null      | Alice    |
| null      | Bob      |
| 2         | Meir     |
| 3         | Winston  |
| 1         | Jonathan |
+-----------+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解释：</p><p>Alice and Bob 没有唯一标识码,因此我们使用 null 替代。</p><p>Meir 的唯一标识码是 2 。</p><p>Winston 的唯一标识码是 3 。</p><p>Jonathan 唯一标识码是 1 。</p><h4 id="解" tabindex="-1"><a class="header-anchor" href="#解" aria-hidden="true">#</a> 解:</h4><p>左外连接 一把梭哈</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> t2<span class="token punctuation">.</span>unique_id<span class="token punctuation">,</span>t1<span class="token punctuation">.</span>name
<span class="token keyword">FROM</span> Employees t1 <span class="token keyword">LEFT</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span> EmployeeUNI t2
<span class="token keyword">ON</span>  t1<span class="token punctuation">.</span>id <span class="token operator">=</span> t2<span class="token punctuation">.</span>id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function k(f,q){const s=d("router-link"),l=d("ExternalLinkIcon");return c(),r("div",null,[v,p,e("nav",m,[e("ul",null,[e("li",null,[i(s,{to:"#相关题目"},{default:a(()=>[n("相关题目")]),_:1}),e("ul",null,[e("li",null,[i(s,{to:"#_1378-使用唯一标识码替换员工id"},{default:a(()=>[n("1378. 使用唯一标识码替换员工ID")]),_:1})])])])])]),b,e("h3",h,[_,n(" 1378. "),e("a",x,[n("使用唯一标识码替换员工ID"),i(l)])]),g])}const E=t(u,[["render",k],["__file","sql-lan-leetcode.html.vue"]]);export{E as default};
