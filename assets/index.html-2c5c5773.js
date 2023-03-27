import{_ as a,W as e,X as h,a0 as r}from"./framework-c8ebc670.js";const d={},i=r(`<h1 id="冯诺依曼系统" tabindex="-1"><a class="header-anchor" href="#冯诺依曼系统" aria-hidden="true">#</a> 冯诺依曼系统</h1><h1 id="计算机硬件图及运行逻辑" tabindex="-1"><a class="header-anchor" href="#计算机硬件图及运行逻辑" aria-hidden="true">#</a> 计算机硬件图及运行逻辑</h1><h2 id="十六进计算" tabindex="-1"><a class="header-anchor" href="#十六进计算" aria-hidden="true">#</a> 十六进计算</h2><h2 id="主存" tabindex="-1"><a class="header-anchor" href="#主存" aria-hidden="true">#</a> 主存</h2><h1 id="校验码和奇偶校验码" tabindex="-1"><a class="header-anchor" href="#校验码和奇偶校验码" aria-hidden="true">#</a> 校验码和奇偶校验码</h1><h2 id="码距" tabindex="-1"><a class="header-anchor" href="#码距" aria-hidden="true">#</a> 码距</h2><h2 id="奇偶校验码" tabindex="-1"><a class="header-anchor" href="#奇偶校验码" aria-hidden="true">#</a> 奇偶校验码</h2><h1 id="海明码" tabindex="-1"><a class="header-anchor" href="#海明码" aria-hidden="true">#</a> 海明码</h1><h1 id="循环冗余校验码crc" tabindex="-1"><a class="header-anchor" href="#循环冗余校验码crc" aria-hidden="true">#</a> 循环冗余校验码CRC</h1><h1 id="指令" tabindex="-1"><a class="header-anchor" href="#指令" aria-hidden="true">#</a> 指令</h1><h2 id="顺序方式" tabindex="-1"><a class="header-anchor" href="#顺序方式" aria-hidden="true">#</a> 顺序方式</h2><h2 id="重叠方式" tabindex="-1"><a class="header-anchor" href="#重叠方式" aria-hidden="true">#</a> 重叠方式</h2><h2 id="流水方式" tabindex="-1"><a class="header-anchor" href="#流水方式" aria-hidden="true">#</a> 流水方式</h2><h3 id="吞吐率" tabindex="-1"><a class="header-anchor" href="#吞吐率" aria-hidden="true">#</a> 吞吐率</h3><p>#存储器</p><h2 id="高速缓冲存储器cache" tabindex="-1"><a class="header-anchor" href="#高速缓冲存储器cache" aria-hidden="true">#</a> 高速缓冲存储器cache</h2><h3 id="直接映像" tabindex="-1"><a class="header-anchor" href="#直接映像" aria-hidden="true">#</a> 直接映像</h3><pre><code>	全相联映像
	组相联映像
	cache性能
	cache写策略
		写回法(write-back)
		写直达法(write-through)
		标记法
	cache的替换机制
		随机算法
		先进新出（FIFO）
		近期最少使用(LRU)
		最不经常使用页置换（LFU）
磁盘存储器
</code></pre><p>指令流 单指令流单数据流（SISD） 单指令流多数据流（SIMD） 多指令流单数据流（MISD） 多指令流多数据流（MIMD）</p><p>指令系统 复杂指令系统CISC 精简指令系统RISC</p><p>总线 单工（收音机） 半双工（对讲机） 全双工（电话）</p><p>磁盘阵列 RAID0-无冗余和无校验的数据分块 RAID1-磁盘镜像阵列 RAID2-采用纠错海明码的磁盘阵列 RAID3/4-采用奇偶校验码的磁盘阵列 RAID5-无独立校验盘的奇偶校验码的磁盘阵列 RAID6-独立的数据硬盘与两个独立的分布式校验方案 RAID7-最优化的异步高I/O速率和高数据传输率 RAID1+0-最可靠与高性能</p>`,22),n=[i];function t(c,s){return e(),h("div",null,n)}const l=a(d,[["render",t],["__file","index.html.vue"]]);export{l as default};
