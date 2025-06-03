const major = parseInt(process.versions.node.split('.')[0], 10)
if (major < 20) {
console.error(
`\n❌ Lu ngapain pake panel bapuk jir😂\n` +
`   Diperlukan: Node.js v20 atau lebih tinggi ya syng\n` +
`   Saat ini: v${process.versions.node}\n\n` +
`   🚀 Sana ganti sayang node.js nya😘!\n`
)
process.exit(1)
}
