import{_ as a,X as s,Y as n,Z as e}from"./framework-3ae3a606.js";const t={},d=e(`<blockquote><p>本文包含了所有SQL语言的基础语法，并用例子的方式向你展示。</p></blockquote><h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><p>模式定义了数据如何存储、存储什么样的数据以及数据如何分解等信息，数据库和表都有模式。主键的值不允许修改，也不允许复用(不能使用已经删除的主键值赋给新数据行的主键)。SQL(Structured Query Language)，标准 SQL 由 ANSI 标准委员会管理，从而称为 ANSI SQL。各个 DBMS 都有自己的实现，如 PL/SQL、Transact-SQL 等。SQL 语句不区分大小写，但是数据库表名、列名和值是否区分依赖于具体的 DBMS 以及配置。SQL 支持以下三种注释:</p><h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 注释</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> <span class="token keyword">user</span><span class="token punctuation">;</span> <span class="token comment">-- 注释</span>
<span class="token comment">/* 注释1
   注释2 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据库创建与使用" tabindex="-1"><a class="header-anchor" href="#数据库创建与使用" aria-hidden="true">#</a> 数据库创建与使用:</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> test<span class="token punctuation">;</span>
<span class="token keyword">USE</span> test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建表" tabindex="-1"><a class="header-anchor" href="#创建表" aria-hidden="true">#</a> 创建表</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> mytable <span class="token punctuation">(</span>
  id <span class="token keyword">INT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
  col1 <span class="token keyword">INT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token number">1</span><span class="token punctuation">,</span>
  col2 <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">45</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  col3 <span class="token keyword">DATE</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改表" tabindex="-1"><a class="header-anchor" href="#修改表" aria-hidden="true">#</a> 修改表</h2><h3 id="添加列" tabindex="-1"><a class="header-anchor" href="#添加列" aria-hidden="true">#</a> 添加列</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> mytable
<span class="token keyword">ADD</span> col <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改列和属性" tabindex="-1"><a class="header-anchor" href="#修改列和属性" aria-hidden="true">#</a> 修改列和属性</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- ALTER TABLE 表名 CHANGE 原字段名 新字段名 字段类型 约束条件</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> mytable 
CHANGE col col1 <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除列" tabindex="-1"><a class="header-anchor" href="#删除列" aria-hidden="true">#</a> 删除列</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> mytable
<span class="token keyword">DROP</span> <span class="token keyword">COLUMN</span> col<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除表" tabindex="-1"><a class="header-anchor" href="#删除表" aria-hidden="true">#</a> 删除表</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> mytable<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="插入" tabindex="-1"><a class="header-anchor" href="#插入" aria-hidden="true">#</a> 插入</h2><h3 id="普通插入" tabindex="-1"><a class="header-anchor" href="#普通插入" aria-hidden="true">#</a> 普通插入</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> mytable<span class="token punctuation">(</span>col1<span class="token punctuation">,</span> col2<span class="token punctuation">)</span>
<span class="token keyword">VALUES</span><span class="token punctuation">(</span>val1<span class="token punctuation">,</span> val2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插入检索出来的数据" tabindex="-1"><a class="header-anchor" href="#插入检索出来的数据" aria-hidden="true">#</a> 插入检索出来的数据</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> mytable1<span class="token punctuation">(</span>col1<span class="token punctuation">,</span> col2<span class="token punctuation">)</span>
<span class="token keyword">SELECT</span> col1<span class="token punctuation">,</span> col2
<span class="token keyword">FROM</span> mytable2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将一个表的内容插入到一个新表" tabindex="-1"><a class="header-anchor" href="#将一个表的内容插入到一个新表" aria-hidden="true">#</a> 将一个表的内容插入到一个新表</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> newtable <span class="token keyword">AS</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> mytable<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新" tabindex="-1"><a class="header-anchor" href="#更新" aria-hidden="true">#</a> 更新</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">UPDATE</span> mytable
<span class="token keyword">SET</span> col <span class="token operator">=</span> val
<span class="token keyword">WHERE</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> mytable
<span class="token keyword">WHERE</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>使用更新和删除操作时一定要用 WHERE 子句，不然会把整张表的数据都破坏。可以先用 SELECT 语句进行测试，防止错误删除</p></div><h3 id="truncate-table-可以清空表-也就是删除所有行。" tabindex="-1"><a class="header-anchor" href="#truncate-table-可以清空表-也就是删除所有行。" aria-hidden="true">#</a> TRUNCATE TABLE 可以清空表，也就是删除所有行。</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">TRUNCATE</span> <span class="token keyword">TABLE</span> mytable<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container danger"><p class="hint-container-title">警告</p><ol><li>TRUNCATE TABLE 在功能上与不带 WHERE 子句的 DELETE 语句相同：二者均删除表中的全部行。但 TRUNCATE TABLE 比 DELETE 速度快，且使用的系统和事务日志资源少。</li><li>DELETE 语句每次删除一行，并在事务日志中为所删除的每行记录一项。TRUNCATE TABLE 通过释放存储表数据所用的数据页来删除数据，并且只在事务日志中记录页的释放。</li><li>TRUNCATE TABLE 删除表中的所有行，但表结构及其列、约束、索引等保持不变。新行标识所用的计数值重置为该列的种子。如果想保留标识计数值，请改用 DELETE。如果要删除表定义及其数据，请使用 DROP TABLE 语句。</li><li>对于由 FOREIGN KEY 约束引用的表，不能使用 TRUNCATE TABLE，而应使用不带 WHERE 子句的 DELETE 语句。由于 TRUNCATE TABLE 不记录在日志中，所以它不能激活触发器。</li><li>TRUNCATE TABLE 不能用于参与了索引视图的表。</li><li>对用TRUNCATE TABLE删除数据的表上增加数据时，要使用UPDATE STATISTICS来维护索引信息。</li><li>如果有ROLLBACK语句，DELETE操作将被撤销，但TRUNCATE不会撤销。</li></ol></div><h2 id="查询" tabindex="-1"><a class="header-anchor" href="#查询" aria-hidden="true">#</a> 查询</h2><h3 id="distinct-去重" tabindex="-1"><a class="header-anchor" href="#distinct-去重" aria-hidden="true">#</a> DISTINCT 去重</h3><p>相同值只会出现一次。它作用于所有列，也就是说所有列的值都相同才算相同。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> col1<span class="token punctuation">,</span> col2
<span class="token keyword">FROM</span> mytable<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="limit-限制返回的行数" tabindex="-1"><a class="header-anchor" href="#limit-限制返回的行数" aria-hidden="true">#</a> LIMIT 限制返回的行数</h3><p>限制返回的行数。可以有两个参数，第一个参数为起始行，从 0 开始；第二个参数为返回的总行数。 返回前 5 行:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> mytable
<span class="token keyword">LIMIT</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> mytable
<span class="token keyword">LIMIT</span> <span class="token number">5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回第 3 ~ 5 行:</p><div class="language-sqlSELECT line-numbers-mode" data-ext="sqlSELECT"><pre class="language-sqlSELECT"><code>FROM mytable
LIMIT 2 OFFSET 3;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> mytable
<span class="token keyword">LIMIT</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="order-by-排序" tabindex="-1"><a class="header-anchor" href="#order-by-排序" aria-hidden="true">#</a> ORDER BY 排序</h3><p>规则</p><ul><li>ASC : 升序(默认)。</li><li>DESC : 降序。</li></ul><p>可以按多个列进行排序，并且为每个列指定不同的排序方式:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> mytable
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> col1 <span class="token keyword">DESC</span><span class="token punctuation">,</span> col2 <span class="token keyword">ASC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="where-条件查询" tabindex="-1"><a class="header-anchor" href="#where-条件查询" aria-hidden="true">#</a> WHERE 条件查询</h3><p>不进行过滤的数据非常大，导致通过网络传输了多余的数据，从而浪费了网络带宽。因此尽量使用 SQL 语句来过滤不必要的数据，而不是传输所有的数据到客户端中然后由客户端进行过滤。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> mytable
<span class="token keyword">WHERE</span> col <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通配符" tabindex="-1"><a class="header-anchor" href="#通配符" aria-hidden="true">#</a> 通配符</h3><p>通配符也是用在过滤语句中，但它只能用于文本字段。类型：</p><ul><li>% 匹配 &gt;=0 个任意字符；_ 匹配 ==1 个任意字符；</li><li>[ ] 可以匹配集合内的字符，例如 [ab] 将匹配字符 a 或者 b。用脱字符</li><li>^ 可以对其进行否定，也就是不匹配集合内的字符。使用 Like 来进行通配符匹配。</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> mytable
<span class="token keyword">WHERE</span> col <span class="token operator">LIKE</span> <span class="token string">&#39;[^AB]%&#39;</span><span class="token punctuation">;</span> <span class="token comment">-- 不以 A 和 B 开头的任意文本</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>不要滥用通配符，通配符位于开头处匹配会非常慢。</p></div><h3 id="计算字段" tabindex="-1"><a class="header-anchor" href="#计算字段" aria-hidden="true">#</a> 计算字段</h3><p>在数据库服务器上完成数据的转换和格式化的工作往往比客户端上快得多，并且转换和格式化后的数据量更少的话可以减少网络通信量。 计算字段通常需要使用 AS 来取别名，否则输出的时候字段名为计算表达式。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> col1 <span class="token operator">*</span> col2 <span class="token keyword">AS</span> alias
<span class="token keyword">FROM</span> mytable<span class="token punctuation">;</span>q
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>CONCAT() 用于连接两个字段。许多数据库会使用空格把一个值填充为列宽，因此连接的结果会出现一些不必要的空格，使用 TRIM() 可以去除首尾空格。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> CONCAT<span class="token punctuation">(</span>TRIM<span class="token punctuation">(</span>col1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">,</span> TRIM<span class="token punctuation">(</span>col2<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> concat_col
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><p>各个 DBMS 的函数都是不相同的，因此不可移植，以下主要是 MySQL 的函数。</p><h3 id="汇总" tabindex="-1"><a class="header-anchor" href="#汇总" aria-hidden="true">#</a> 汇总</h3><table><thead><tr><th>函数</th><th>说明</th></tr></thead><tbody><tr><td>AVG()</td><td>返回某列的平均值</td></tr><tr><td>COUNT()</td><td>返回某列的行数</td></tr><tr><td>MAX()</td><td>返回某列的最大值</td></tr><tr><td>MIN()</td><td>返回某列的最小值</td></tr><tr><td>SUM()</td><td>返回某列值之和</td></tr></tbody></table><p>AVG() 会忽略 NULL 行。</p><p>使用 DISTINCT 可以让汇总函数值汇总不同的值。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span><span class="token keyword">DISTINCT</span> col1<span class="token punctuation">)</span> <span class="token keyword">AS</span> avg_col
<span class="token keyword">FROM</span> mytable<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文本处理" tabindex="-1"><a class="header-anchor" href="#文本处理" aria-hidden="true">#</a> 文本处理</h3><table><thead><tr><th>函数</th><th>说明</th></tr></thead><tbody><tr><td>LEFT()</td><td>左边的字符</td></tr><tr><td>RIGHT()</td><td>右边的字符</td></tr><tr><td>LOWER()</td><td>转换为小写字符</td></tr><tr><td>UPPER()</td><td>转换为大写字符</td></tr><tr><td>LTRIM()</td><td>去除左边的空格</td></tr><tr><td>RTRIM()</td><td>去除右边的空格</td></tr><tr><td>LENGTH()</td><td>长度</td></tr><tr><td>SOUNDEX()</td><td>转换为语音值</td></tr></tbody></table><p>其中， <strong>SOUNDEX()</strong> 可以将一个字符串转换为描述其语音表示的字母数字模式。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> mytable
<span class="token keyword">WHERE</span> SOUNDEX<span class="token punctuation">(</span>col1<span class="token punctuation">)</span> <span class="token operator">=</span> SOUNDEX<span class="token punctuation">(</span><span class="token string">&#39;apple&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日期和时间处理" tabindex="-1"><a class="header-anchor" href="#日期和时间处理" aria-hidden="true">#</a> 日期和时间处理</h3><p>格式</p><ul><li>日期格式: YYYY-MM-DD</li><li>时间格式: HH:MM:SS</li></ul><table><thead><tr><th>函数</th><th>说明</th></tr></thead><tbody><tr><td>AddDate()</td><td>增加一个日期(天、周等)</td></tr><tr><td>AddTime()</td><td>增加一个时间(时、分等)</td></tr><tr><td>CurDate()</td><td>返回当前日期CurTime()</td></tr><tr><td>Date()</td><td>返回日期时间的日期部分</td></tr><tr><td>DateDiff()</td><td>计算两个日期之差</td></tr><tr><td>Date_Add()</td><td>高度灵活的日期运算函数</td></tr><tr><td>Date_Format()</td><td>返回一个格式化的日期或时间串</td></tr><tr><td>Day()</td><td>返回一个日期的天数部分</td></tr><tr><td>DayOfWeek()</td><td>对于一个日期，返回对应的星期几</td></tr><tr><td>Hour()</td><td>返回一个时间的小时部分</td></tr><tr><td>Minute()</td><td>返回一个时间的分钟部分</td></tr><tr><td>Month()</td><td>返回一个日期的月份部分</td></tr><tr><td>Now()</td><td>返回当前日期和时间</td></tr><tr><td>Second()</td><td>返回一个时间的秒部分</td></tr><tr><td>Time()</td><td>返回一个日期时间的时间部分</td></tr><tr><td>Year()</td><td>返回一个日期的年份部分</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> SELECT NOW<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">2018</span>-4-14 <span class="token number">20</span>:25:11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数值处理" tabindex="-1"><a class="header-anchor" href="#数值处理" aria-hidden="true">#</a> 数值处理</h3><table><thead><tr><th>函数</th><th>说明</th></tr></thead><tbody><tr><td>SIN()</td><td>正弦</td></tr><tr><td>COS()</td><td>余弦</td></tr><tr><td>TAN()</td><td>正切</td></tr><tr><td>ABS()</td><td>绝对值</td></tr><tr><td>SQRT()</td><td>平方根</td></tr><tr><td>MOD()</td><td>余数</td></tr><tr><td>EXP()</td><td>指数</td></tr><tr><td>PI()</td><td>圆周率</td></tr><tr><td>RAND()</td><td>随机数</td></tr></tbody></table><h2 id="分组" tabindex="-1"><a class="header-anchor" href="#分组" aria-hidden="true">#</a> 分组</h2><p>分组就是把具有相同的数据值的行放在同一组中。</p><p>可以对同一分组数据使用汇总函数进行处理，例如求分组数据的平均值等。</p><p>指定的分组字段除了能按该字段进行分组，也会自动按该字段进行排序。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> col<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> num
<span class="token keyword">FROM</span> mytable
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> col<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GROUP BY 自动按分组字段进行排序，ORDER BY 也可以按汇总字段来进行排序。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> col<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> num
<span class="token keyword">FROM</span> mytable
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> col
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> num<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>WHERE 过滤行，HAVING 过滤分组，行过滤应当先于分组过滤。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> col<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> num
<span class="token keyword">FROM</span> mytable
<span class="token keyword">WHERE</span> col <span class="token operator">&gt;</span> <span class="token number">2</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> col
<span class="token keyword">HAVING</span> num <span class="token operator">&gt;=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分组规定:</p><ul><li>GROUP BY 子句出现在 WHERE 子句之后，ORDER BY 子句之前；</li><li>除了汇总字段外，SELECT 语句中的每一字段都必须在 GROUP BY 子句中给出；</li><li>NULL 的行会单独分为一组；</li><li>大多数 SQL 实现不支持 GROUP BY 列具有可变长度的数据类型。</li></ul><h2 id="子查询" tabindex="-1"><a class="header-anchor" href="#子查询" aria-hidden="true">#</a> 子查询</h2><h2 id="连接" tabindex="-1"><a class="header-anchor" href="#连接" aria-hidden="true">#</a> 连接</h2><h3 id="内连接" tabindex="-1"><a class="header-anchor" href="#内连接" aria-hidden="true">#</a> 内连接</h3><h3 id="自连接" tabindex="-1"><a class="header-anchor" href="#自连接" aria-hidden="true">#</a> 自连接</h3><h3 id="自然连接" tabindex="-1"><a class="header-anchor" href="#自然连接" aria-hidden="true">#</a> 自然连接</h3><h3 id="外连接" tabindex="-1"><a class="header-anchor" href="#外连接" aria-hidden="true">#</a> 外连接</h3><h2 id="视图" tabindex="-1"><a class="header-anchor" href="#视图" aria-hidden="true">#</a> 视图</h2><h2 id="存储过程" tabindex="-1"><a class="header-anchor" href="#存储过程" aria-hidden="true">#</a> 存储过程</h2><h2 id="游标" tabindex="-1"><a class="header-anchor" href="#游标" aria-hidden="true">#</a> 游标</h2><h2 id="触发器" tabindex="-1"><a class="header-anchor" href="#触发器" aria-hidden="true">#</a> 触发器</h2><h2 id="事务管理" tabindex="-1"><a class="header-anchor" href="#事务管理" aria-hidden="true">#</a> 事务管理</h2><h2 id="字符集" tabindex="-1"><a class="header-anchor" href="#字符集" aria-hidden="true">#</a> 字符集</h2><h2 id="权限管理" tabindex="-1"><a class="header-anchor" href="#权限管理" aria-hidden="true">#</a> 权限管理</h2><h2 id="组合查询" tabindex="-1"><a class="header-anchor" href="#组合查询" aria-hidden="true">#</a> 组合查询</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2><ul><li>BenForta. SQL 必知必会 [M]. 人民邮电出版社, 2013.</li></ul>`,110),l=[d];function i(r,c){return s(),n("div",null,l)}const o=a(t,[["render",i],["__file","sql-lan.html.vue"]]);export{o as default};
