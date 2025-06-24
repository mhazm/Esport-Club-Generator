let currentLanguage = 'en';

const translations = {
  en: {
    appTitle: "Esports Club Data Generator",
    playerGenerator: "Player Generator",
    teamGenerator: "Team Generator",
    heroGenerator: "Hero Generator",
    addPlayer: "Add Player",
    errorData: "Field Not Complete",
    fillData: "Please fill in the following fields: %fields%",
    generate: "Generate Data",
    copy: "Copy Data",
    delete: "Delete Data",
    heroId: "Hero ID",
    heroName: "Hero Name",
    baseHp: "Base HP (Level 1)",
    baseATK: "Base Attack (Level 1)",
    growthHP: "Growth HP (by Level)",
    growthATK: "Growth Attack (by Level)",
    durability: "Durability",
    offense: "Offense",
    playDifficulty: "Play Difficulty (1-10)",
    role: "Role",
    positionLimit: "Position Limit",
    strongTerm: "Strong Term",
    teamId: "Team ID",
    teamName: "Team Name",
    nation: "Nation",
    region: "Region",
    addPlayer: "Add Player",
    player: "Player",
    firstName: "First Name",
    lastName: "Last Name",
    nickname: "Nickname",
    position: "Position",
    birthDate: "Birth Date (YYYY.M.D)",
    deletePlayer: "Delete Player",
    error: "Error",
    alert: "Alert",
    done: "Succeed",
    errorMinOnePlayer: "There must be at least 1 player",
    noOutput: "There is no output to copy. Generate output first.",
    outputCopy: "Output copied to clipboard!",
    outputCopyFailed: "Failed to copy output.",
    outputCopyError: "Error while copying.",
    selectRoleErr: "Please select at least one Role",
    selectPositionErr: "Please select at least one Position Limit",
    jsErr: "JavaScript Error",
    jsErrMsg: "An error occurred: %message%"
    // Tambahkan semua terjemahan English
  },
  id: {
    appTitle: "Esports Club Pembuat Data",
    playerGenerator: "Pembuat Pemain",
    teamGenerator: "Pembuat Tim", 
    heroGenerator: "Pembuat Hero",
    addPlayer: "Tambah Pemain",
    errorData: "Bidang Belum Lengkap",
    fillData: "<p>Harap isi bidang berikut: %fields%",
    generate: "Buat Data",
    copy: "Salin Data",
    delete: "Hapus Data",
    heroId: "Hero ID",
    heroName: "Nama Hero",
    baseHp: "Base HP (Level 1)",
    baseATK: "Base Attack (Level 1)",
    growthHP: "Growth HP (per Level)",
    growthATK: "Growth Attack (per Level)",
    durability: "Ketahanan",
    offense: "Serangan",
    playDifficulty: "Kesusahan untuk dimainkan (1-10)",
    role: "Peran",
    positionLimit: "Batas Posisi",
    strongTerm: "Strong Term",
    teamId: "Team ID",
    teamName: "Nama Tim",
    nation: "Negara",
    region: "Wilayah (Ibu Kota)",
    addPlayer: "Tambah Pemain",
    player: "Pemain",
    firstName: "Nama Depan",
    lastName: "Nama Belakang",
    nickname: "Nama Panggilan",
    position: "Posisi",
    birthDate: "Tanggal Lahir (YYYY.M.D)",
    deletePlayer: "Hapus Pemain",
    error: "Terjadi Kesalahan",
    alert: "Peringatan",
    done: "Berhasil",
    errorMinOnePlayer: "Minimal harus ada 1 pemain",
    noOutput: "Tidak ada output yang bisa disalin. Buat output terlebih dahulu.",
    outputCopy: "Output disalin ke papan klip!",
    outputCopyFailed: "Failed to copy output.",
    outputCopyError: "Terjadi kesalahan saat menyalin.",
    selectRoleErr: "Harap pilih minimal satu Role",
    selectPositionErr: "Harap pilih minimal satu Position Limit",
    jsErr: "JavaScript Rusak",
    jsErrMsg: "Terjadi kesalahan: %message%"
    // Tambahkan semua terjemahan Indonesia
  },
  cn: {
    appTitle: "电子竞技俱乐部数据生成器",
    playerGenerator: "玩家生成器",
    teamGenerator: "团队生成器",
    heroGenerator: "英雄生成器",
    addPlayer: "添加玩家",
    errorData: "字段未完成",
    fillData: "请填写以下字段: %fields%",
    generate: "生成数据",
    copy: "复制数据",
    delete: "删除数据",
    heroId: "英雄号码",
    heroName: "英雄名字",
    baseHp: "基础生命值（1级）",
    baseATK: "基础攻击（1级）",
    growthHP: "成长生命值（每级）",
    growthATK: "成长攻击（每级）",
    durability: "耐久性",
    offense: "罪行",
    playDifficulty: "游戏难度（1-10）",
    role: "角色",
    positionLimit: "持仓限制",
    strongTerm: "强势术语",
    teamId: "球队号码",
    teamName: "团队名称",
    nation: "国籍",
    region: "地区",
    addPlayer: "添加玩家",
    player: "Player",
    firstName: "First Name",
    lastName: "Last Name",
    nickname: "Nickname",
    position: "Position",
    birthDate: "Birth Date (YYYY.M.D)",
    deletePlayer: "Delete Player",
    error: "Error",
    alert: "Alert",
    done: "Succeed",
    errorMinOnePlayer: "There must be at least 1 player",
    noOutput: "There is no output to copy. Generate output first.",
    outputCopy: "Output disalin ke papan klip!",
    outputCopyFailed: "Failed to copy output.",
    outputCopyError: "Error while copying.",
    selectRoleErr: "Please select at least one Role",
    selectPositionErr: "Please select at least one Position Limit",
    jsErr: "JavaScript Error",
    jsErrMsg: "An error occurred: %message%"
  }
};

// Fungsi untuk mengubah bahasa
function getTranslation(key) {
    return translations[currentLanguage][key] || key;
}

function setLanguage(lang) {
    currentLanguage = lang;
    applyTranslations();
}

function applyTranslations() {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        // Hanya ganti teks jika ada terjemahan yang tersedia
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            // Simpan icon jika ada sebelum mengganti teks
            const icon = el.querySelector('i');
            el.textContent = ''; // Kosongkan elemen terlebih dahulu
            if (icon) {
                el.appendChild(icon); // Kembalikan icon jika ada
            }
            el.appendChild(document.createTextNode(translations[currentLanguage][key]));
        }
    });
}

// Initialize language selector
document.addEventListener('DOMContentLoaded', function() {
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            setLanguage(this.value);
        });
    }
});