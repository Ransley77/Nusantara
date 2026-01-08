// Database Konten
const db = [
    {
        id: 'indo',
        title: 'INDONESIA',
        subtitle: 'NEGARA KEPULAUAN',
        color: '#FF0000',
        hoverColor: '#FF0000',
        coverImage: 'coverindonesia.jpeg',
        backgrounds: {
            view1: { type: 'video', src: 'indonesia.mp4' },
            view2: { type: 'video', src: 'indonesia.mp4' },
            view34: { type: 'video', src: 'indonesia.mp4' }
        },
        audio: 'kebyar.mp3',
        audioView: 'kebyar.mp3',
        animClass: 'reveal-indo',
        type: 'indo',
        data: [
            { 
                title: "1. Identitas & Letak Geografis", 
                img: "geografiindonesia.jpeg", 
                desc: "Indonesia adalah negara kepulauan terbesar di dunia yang terletak di garis khatulistiwa, di antara Benua Asia dan Australia serta Samudra Hindia dan Pasifik. Posisi ini menjadikan Indonesia kaya akan jalur perdagangan, budaya, dan keanekaragaman alam." 
            },
            { 
                title: "2. Penduduk & Keberagaman", 
                img: "pendudukkeberagaman.jpeg", 
                desc: "Indonesia memiliki sekitar 280 juta penduduk dan ratusan suku bangsa. Keberagaman ini mencakup bahasa, adat istiadat, dan kepercayaan yang hidup berdampingan dalam satu negara." 
            },
            { 
                title: "3. Bahasa & Identitas Nasional", 
                img: "identitasindonesia.jpeg", 
                desc: "Bahasa Indonesia berfungsi sebagai bahasa pemersatu nasional. Selain itu, terdapat lebih dari 700 bahasa daerah yang mencerminkan kekayaan budaya lokal di setiap wilayah Nusantara." 
            },
            { 
                title: "4. Sistem Negara & Pemerintahan", 
                img: "pemerintahindonesia.jpeg", 
                desc: "Indonesia menganut sistem pemerintahan presidensial. Presiden dipilih langsung oleh rakyat dan berperan sebagai kepala negara sekaligus kepala pemerintahan dalam kerangka Negara Kesatuan Republik Indonesia." 
            },
            { 
                title: "5. Budaya & Warisan Dunia", 
                img: "budayaindonesia.jpeg", 
                desc: "Indonesia memiliki banyak warisan budaya yang diakui dunia, seperti batik, wayang, angklung, dan pencak silat, serta situs bersejarah seperti Candi Borobudur dan Prambanan yang mencerminkan peradaban Nusantara sejak masa lampau." 
            }
        ]
    },
    {
        id: 'bali',
        title: 'BALI',
        subtitle: 'PULAU DEWATA',
        color: '#00FFFF',
        hoverColor: '#00FFFF',
        coverImage: 'BBalisatu.jpg',
        backgrounds: {
            view1: { type: 'image', src: 'BBalisatu.jpg' },
            view2: { type: 'image', src: 'BBalisatu.jpg' },
            view34: { type: 'image', src: 'BBalisatu.jpg' }
        },
        audio: 'kebyar.mp3', 
        audioView: 'kebyar.mp3',
        animClass: 'reveal-bali',
        type: 'normal',
        aspects: ['SEJARAH', 'BAHASA', 'BUDAYA', 'AKSARA'],
        aspectImages: {
            'SEJARAH': 'BBalisatu.jpg',
            'BAHASA': 'BBalisatu.jpg',
            'BUDAYA': 'BBalisatu.jpg',
            'AKSARA': 'BBalisatu.jpg'
        },
        details: {
            'SEJARAH': [
                { title: "Walidwipa & Jejak Awal", img: "BBalisatu.jpg", desc: "Nama Bali berasal dari kata Sanskerta Wali yang berarti persembahan suci. Penyebutan tertua terdapat pada Prasasti Blanjong (913 M) di Sanur yang menyebut Bali sebagai Walidwipa. Masuknya Hindu dipelopori oleh Rsi Markandeya pada abad ke-8." },
                { title: "Warisan Majapahit", img: "BBalisatu.jpg", desc: "Penaklukan Bali oleh Majapahit pada tahun 1343 M membawa pengaruh besar. Bangsawan dan pendeta dari Jawa bermigrasi ke Bali setelah runtuhnya Majapahit dan meleburkan Hindu Siwa-Buddha dengan kepercayaan lokal." },
                { title: "Puputan Badung & Klungkung", img: "BBalisatu.jpg", desc: "Puputan adalah perang kehormatan hingga titik darah terakhir. Puputan Badung (1906) dan Puputan Klungkung (1908) menjadi simbol perlawanan rakyat Bali terhadap kolonialisme Belanda." },
                { title: "Dari Agraris ke Pariwisata", img: "BBalisatu.jpg", desc: "Bali resmi menjadi provinsi pada tahun 1958. Sejak 1970-an, Bali bertransformasi dari masyarakat agraris menjadi pusat pariwisata budaya dunia tanpa meninggalkan nilai adat dan spiritual." }
            ],
            'BAHASA': [
                { title: "Bahasa Alus", img: "BBalisatu.jpg", desc: "Digunakan untuk berbicara kepada pendeta, orang tua, dan tokoh adat sebagai bentuk penghormatan." },
                { title: "Bahasa Madya", img: "BBalisatu.jpg", desc: "Digunakan dalam percakapan sopan sehari-hari antar sesama." },
                { title: "Bahasa Kasar", img: "BBalisatu.jpg", desc: "Digunakan dalam kondisi marah atau kepada hewan, mencerminkan ekspresi emosi manusia." }
            ],
            'BUDAYA': [
                { title: "Hari Nyepi", img: "tari-kecak.webp", desc: "Hari hening total selama 24 jam untuk introspeksi diri dan pemulihan alam (Mulatsarira)." },
                { title: "Ngaben", img: "tari-kecak.webp", desc: "Upacara kremasi untuk mempercepat kembalinya unsur tubuh (Panca Maha Bhuta) ke alam semesta." },
                { title: "Ogoh-Ogoh", img: "tari-kecak.webp", desc: "Patung raksasa simbol sifat buruk manusia (Bhuta Kala) yang diarak dan dibakar sebelum Nyepi." }
            ],
            'AKSARA': [
                { title: "Aksara Bali", img: "BBalisatu.jpg", desc: "Memiliki 18 huruf utama (Wreastra) dan dianggap memiliki nilai spiritual." },
                { title: "Media Lontar", img: "BBalisatu.jpg", desc: "Ditulis di daun lontar menggunakan pisau pengrupak dan dihitamkan dengan kemiri bakar." }
            ]
        }
    },
    {
        id: 'baubau',
        title: 'BAU BAU',
        subtitle: 'NEGERI KHALIFATUL KHAMIS',
        color: '#FFD700',
        hoverColor: '#FFD700',
        coverImage: 'gmbar-tmbhn.jpg',
        backgrounds: {
            view1: { type: 'image', src: 'gmbar-tmbhn.jpg' },
            view2: { type: 'image', src: 'gmbar-tmbhn.jpg' },
            view34: { type: 'image', src: 'gmbar-tmbhn.jpg' }
        },
        audio: 'baubausatu.mpeg',
        audioView: 'baubaudua.mp3',
        animClass: 'reveal-baubau',
        type: 'normal',
        aspects: ['SEJARAH', 'BAHASA', 'BUDAYA', 'AKSARA'],
        aspectImages: {
            'SEJARAH': 'gmbar-tmbhn.jpg',
            'BAHASA': 'gmbar-tmbhn.jpg',
            'BUDAYA': 'gmbar-tmbhn.jpg',
            'AKSARA': 'gmbar-tmbhn.jpg'
        },
        details: {
            'SEJARAH': [
                { title: "Kesultanan Buton", img: "gmbar-tmbhn.jpg", desc: "Buton berkembang dari kerajaan Hindu-Buddha menjadi kesultanan Islam yang kuat di jalur perdagangan Nusantara." },
                { title: "Benteng Keraton", img: "gmbar-tmbhn.jpg", desc: "Benteng terluas di dunia (23,375 hektar) dan diakui Guinness World Records." },
                { title: "Demokrasi Siolimbona", img: "gmbar-tmbhn.jpg", desc: "Sultan dipilih oleh dewan rakyat (Siolimbona), bukan otomatis berdasarkan keturunan." }
            ],
            'BAHASA': [
                { title: "Bahasa Wolio", img: "gmbar-tmbhn.jpg", desc: "Bahasa resmi pemerintahan dan sastra Kesultanan Buton." },
                { title: "Bahasa Cia-Cia", img: "gmbar-tmbhn.jpg", desc: "Bahasa lokal yang menggunakan huruf Hangul Korea untuk pelestarian fonetik." }
            ],
            'BUDAYA': [
                { title: "Pakande-kandea", img: "gmbar-tmbhn.jpg", desc: "Tradisi makan bersama sebagai simbol rasa syukur dan kebersamaan." },
                { title: "Tari Linda", img: "gmbar-tmbhn.jpg", desc: "Tarian yang melambangkan transisi kedewasaan perempuan." }
            ],
            'AKSARA': [
                { title: "Aksara Wolio", img: "gmbar-tmbhn.jpg", desc: "Modifikasi huruf Arab yang disesuaikan dengan bunyi bahasa lokal." },
                { title: "Huruf Hangul", img: "gmbar-tmbhn.jpg", desc: "Digunakan oleh suku Cia-Cia untuk pelestarian bahasa." }
            ]
        }
    },
    {
        id: 'mentawai',
        title: 'MENTAWAI',
        subtitle: 'BUMI SIKEREI',
        color: '#39FF14',
        hoverColor: '#32CD32',
        coverImage: 'covermentawai.jpeg',
        backgrounds: {
            view1: { type: 'image', src: 'covermentawai.jpeg' },
            view2: { type: 'image', src: 'Bmentawaisatu.jpeg' },
            view34: { type: 'image', src: 'Bmentawaidua.jpeg' }
        },
        audio: 'mentawaisatu.mp3',
        audioView: 'mentawaidua.mp3',
        animClass: 'reveal-mentawai',
        type: 'normal',
        aspects: ['SEJARAH', 'BAHASA', 'BUDAYA', 'AKSARA'],
        aspectImages: {
            'SEJARAH': 'sejarahmentawai.jpeg',
            'BAHASA': 'bahasamentawai.jpeg',
            'BUDAYA': 'budayamentawai.jpeg',
            'AKSARA': 'aksaramentawai.jpeg'
        },
        details: {
            'SEJARAH': [
                { title: "Suku Mentawai", img: "ok.jpg", desc: "Salah satu masyarakat adat tertua yang hidup terisolasi dan menjaga budaya asli." },
                { title: "Sistem Uma", img: "ok.jpg", desc: "Rumah adat sekaligus pusat kehidupan sosial dan ritual." }
            ],
            'BAHASA': [
                { title: "Bahasa Mentawai", img: "ok.jpg", desc: "Bahasa Austronesia yang digunakan dalam kehidupan sehari-hari dan ritual." },
                { title: "Bahasa Ritual", img: "ok.jpg", desc: "Digunakan dalam upacara adat dan mantra." }
            ],
            'BUDAYA': [
                { title: "Tato Mentawai", img: "ok.jpg", desc: "Simbol identitas, status sosial, dan hubungan manusia dengan alam." },
                { title: "Sikerei", img: "ok.jpg", desc: "Tabib dan pemimpin spiritual dalam masyarakat Mentawai." }
            ],
            'AKSARA': [
                { title: "Tradisi Lisan", img: "ok.jpg", desc: "Budaya Mentawai tidak mengenal aksara tulis tradisional." },
                { title: "Simbol Tato", img: "ok.jpg", desc: "Motif tato berfungsi sebagai bahasa simbolik tubuh." }
            ]
        }
    },
    {
        id: 'sulsel',
        title: 'SULAWESI SELATAN',
        subtitle: 'PHINISI NUSANTARA',
        color: '#8B4513',
        hoverColor: '#A0522D',
        coverImage: 'coversulsel.jpg',
        backgrounds: {
            view1: { type: 'image', src: 'coversulsel.jpg' },
            view2: { type: 'image', src: 'Bsulsel1.jpg' },
            view34: { type: 'image', src: 'Bsulsel2.jpg' }
        },
        audio: 'sulselsatu.mpeg',
        audioView: 'sulseldua.mpeg',
        animClass: 'reveal-sulsel',
        type: 'normal',
        aspects: ['SEJARAH', 'BAHASA', 'BUDAYA', 'AKSARA'],
        aspectImages: {
            'SEJARAH': 'sejarahsulsel.jpg',
            'BAHASA': 'bahasasulsel.png',
            'BUDAYA': 'budayasulsel.jpg',
            'AKSARA': 'aksarasulsel.jpg'
        },
        details: {
            'SEJARAH': [
                { title: "Masa Prasejarah", img: "sejarahsulsel1.jpg", desc: "Sulawesi Selatan memiliki sejarah panjang dengan kerajaan-kerajaan besar seperti Gowa, Tallo, Bone, dan Wajo yang memainkan peran penting dalam sejarah Nusantara." },
                { title: "Awal Kerajaan Lokal (Abad ke-13-15)", img: "sejarahsulsel2.jpg", desc: "Kerajaan maritim terkuat di Indonesia Timur pada abad ke-16, dikenal dengan Benteng Somba Opu dan kekuatan armada lautnya." },
                { title: "Islamisasi (Abad ke-16-17)", img: "sejarahsulsel3.jpg", desc: "Perang antara Kerajaan Gowa melawan VOC Belanda yang berlangsung dari 1666-1669, mengakibatkan jatuhnya Benteng Somba Opu." },
                { title: "Perlawanan terhadap Kolonial (Abad ke-17 – Awal Abad ke-20)", img: "sejarahsulsel4.jpg", desc: "Perang antara Kerajaan Gowa melawan VOC Belanda yang berlangsung dari 1666-1669, mengakibatkan jatuhnya Benteng Somba Opu." },
                { title: "Perjuangan Kemerdekaan & Masa Setelahnya", img: "sejarahsulsel5.jpg", desc: "Perang antara Kerajaan Gowa melawan VOC Belanda yang berlangsung dari 1666-1669, mengakibatkan jatuhnya Benteng Somba Opu." }
            ],
            'BAHASA': [
                { title: "Bahasa Makassar", img: "basamangkasara.png", desc: "Bahasa daerah yang digunakan oleh suku Makassar dengan aksara tradisional Lontara." },
                { title: "Bahasa Bugis (Basa Ugi)", img: "basaugi.png", desc: "Bahasa dengan tradisi sastra lisan dan tulisan yang kaya, dikenal dengan Sureq (epik La Galigo)." },
                { title: "Bahasa Toraja (Basa Taddek)", img: "basataddek.png", desc: "Bahasa dengan sistem pemanggilan kekerabatan yang kompleks dan digunakan dalam upacara adat." },
                { title: "Bahasa Mandar (Basa Mandar)", img: "basamandar.png", desc: "Bahasa dengan sistem pemanggilan kekerabatan yang kompleks dan digunakan dalam upacara adat." }
            ],
            'BUDAYA': [
                { title: "Upacara Adat Rambu Solo' (Toraja)", img: "rambusolo.jpg", desc: "Rumah adat Toraja dengan atap melengkung seperti perahu, simbol status sosial dan pusat kehidupan adat." },
                { title: "Tradisi Maritim & Perahu Phinisi", img: "kapalphinisi.jpg", desc: "Tarian khas Toraja yang biasanya ditampilkan dalam upacara Rambu Solo' (pemakaman)." },
                { title: "Adat Pernikahan & Uang Panai'", img: "adatpernikahan.jpg", desc: "Ukiran khas Toraja dengan motif alam dan filosofi kehidupan yang dalam." },
                { title: "Tari Pakarena", img: "taripakarena.jpg", desc: "Ukiran khas Toraja dengan motif alam dan filosofi kehidupan yang dalam." }
            ],
            'AKSARA': [
                { title: "Aksara Lontara", img: "aksaralontara.jpg", desc: "Aksara tradisional Bugis-Makassar yang digunakan untuk menulis naskah-naskah kuno, sejarah, dan sastra." },
                { title: "Aksara Jangan-Jangan (Lontara Kuno)", img: "aksarajanganjangan.jpg", desc: "Epik terpanjang di dunia yang ditulis dalam aksara Lontara, menceritakan asal-usul manusia dan alam semesta." },
                { title: "Aksara Serang (Abjad Jawi Lokal)", img: "aksaraserang.jpeg", desc: "Epik terpanjang di dunia yang ditulis dalam aksara Lontara, menceritakan asal-usul manusia dan alam semesta." },
                { title: "Lontara Bugis, Makassar, Mandar", img: "lontarabugismakassarmandar.jpg", desc: "Epik terpanjang di dunia yang ditulis dalam aksara Lontara, menceritakan asal-usul manusia dan alam semesta." }
            ]
        }
    },
    {
        id: 'papua',
        title: 'PAPUA',
        subtitle: 'SURGA KECIL',
        color: '#A020F0',
        hoverColor: '#9400D3',
        coverImage: 'unnamed.jpg',
        backgrounds: {
            view1: { type: 'image', src: 'unnamed.jpg' },
            view2: { type: 'image', src: 'unnamed.jpg' },
            view34: { type: 'image', src: 'unnamed.jpg' }
        },
        audio: 'kebyar.mp3',
        audioView: 'kebyar.mp3',
        animClass: 'reveal-papua',
        type: 'normal',
        aspects: ['SEJARAH', 'BAHASA', 'BUDAYA', 'AKSARA'],
        aspectImages: {
            'SEJARAH': 'unnamed.jpg',
            'BAHASA': 'unnamed.jpg',
            'BUDAYA': 'unnamed.jpg',
            'AKSARA': 'unnamed.jpg'
        },
        details: {
            'SEJARAH': [
                { title: "Masyarakat Adat Papua", img: "unnamed.jpg", desc: "Papua dihuni oleh berbagai suku asli yang telah mendiami pulau ini selama ribuan tahun dengan budaya yang unik dan beragam." },
                { title: "Pengaruh Kolonial", img: "unnamed.jpg", desc: "Papua mengalami periode kolonialisme oleh Belanda, yang meninggalkan pengaruh pada pembagian wilayah dan administrasi." },
                { title: "Integrasi dengan Indonesia", img: "unnamed.jpg", desc: "Proses integrasi Papua ke dalam Negara Kesatuan Republik Indonesia melalui Penentuan Pendapat Rakyat (Pepera) tahun 1969." }
            ],
            'BAHASA': [
                { title: "Bahasa Indonesia Papua", img: "unnamed.jpg", desc: "Varian bahasa Indonesia dengan pengaruh kosakata dan struktur bahasa lokal Papua." },
                { title: "Bahasa Melayu Papua", img: "unnamed.jpg", desc: "Bahasa kreol yang berkembang dari bahasa Melayu dengan campuran kosakata lokal." },
                { title: "Bahasa-bahasa Suku", img: "unnamed.jpg", desc: "Lebih dari 250 bahasa daerah yang digunakan oleh berbagai suku di Papua." }
            ],
            'BUDAYA': [
                { title: "Rumah Honai", img: "unnamed.jpg", desc: "Rumah tradisional Papua dengan atap jerami dan dinding kayu, biasanya digunakan oleh suku Dani." },
                { title: "Tari Perang", img: "unnamed.jpg", desc: "Tarian tradisional yang menggambarkan semangat perang dan keberanian suku-suku Papua." },
                { title: "Pesta Bakar Batu", img: "unnamed.jpg", desc: "Upacara adat memasak dengan cara membakar batu untuk memanaskan makanan dalam lubang tanah." }
            ],
            'AKSARA': [
                { title: "Tradisi Lisan", img: "unnamed.jpg", desc: "Sebagian besar budaya Papua mengandalkan tradisi lisan untuk mewariskan pengetahuan dan sejarah." },
                { title: "Simbol-simbol Adat", img: "unnamed.jpg", desc: "Penggunaan simbol-simbol dalam ukiran, tato, dan benda seni untuk merekam cerita dan nilai-nilai budaya." }
            ]
        }
    }
];

const members = [
    { 
        name: "BRANDON WESLEY", 
        shortName: "ANGGOTA 1", // Nama untuk banner tidak aktif
        sub: "Teknik Informatika", 
        det1: "Kelas C", 
        det2: "Angkatan 2025/2026" 
    },
    { 
        name: "CHARLIE JHODYA SOE", 
        shortName: "ANGGOTA 2",
        sub: "Teknik Informatika", 
        det1: "Kelas D", 
        det2: "Angkatan 2025/2026" 
    },
    { 
        name: "FELIX LIN", 
        shortName: "ANGGOTA 3",
        sub: "Teknik Informatika", 
        det1: "Kelas A", 
        det2: "Angkatan 2025" 
    },
    { 
        name: "MOSES MARVIAN ARSATA", 
        shortName: "ANGGOTA 4",
        sub: "Teknik Informatika", 
        det1: "Kelas A", 
        det2: "Angkatan 2025/2026" 
    }
];

const contacts = [
    { 
        name: "BRANDON WESLEY", 
        shortName: "BRANDON", // Nama panggilan untuk banner tidak aktif
        sub: "ID Line: 15797722", 
        det1: "085888616127", 
        det2: "brandon.535250138@stu.untar.ac.id" 
    },
    { 
        name: "CHARLIE JHODYA SOE", 
        shortName: "CHARLIE",
        sub: "ID Line: charlie.jsoe3", 
        det1: "0811933398", 
        det2: "jhodyacharlie@gmail.com" 
    },
    { 
        name: "FELIX LIN", 
        shortName: "FELIX",
        sub: "ID Line: @chenn168", 
        det1: "081282284506", 
        det2: "felix.535250044@stu.untar.ac.id" 
    },
    { 
        name: "MOSES MARVIAN ARSATA", 
        shortName: "MOSES",
        sub: "ID Line: marvian321", 
        det1: "089523463130", 
        det2: "moses.535250050@stu.untar.ac.id" 
    }
];

const modalBackgrounds = {
    "ABOUT US": "about-us.jpeg",
    "CONTACT US": "contact-us.jpeg"
};

let currentIndex = 0;
let isMuted = true; 
let isModalOpen = false;

// ==================== //
// FUNGSI BARU - RIPPLE WAVE
// ==================== //
function createRipple(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple-wave');
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// ==================== //
// FUNGSI UTAMA
// ==================== //

// Initial Config
window.onload = () => {
    const vid = document.getElementById('intro-vid');
    vid.loop = false; 
    vid.play().catch(e => console.log("Menunggu interaksi user"));

    vid.addEventListener('timeupdate', function() {
        if (this.currentTime > this.duration - 0.5) {
            this.currentTime = 3; 
            this.play();
        }
    });

    setTimeout(() => {
        document.getElementById('intro-overlay').style.opacity = '1';
        document.getElementById('intro-content').style.opacity = '1';
    }, 2000);
    
    // Event listener untuk efek ripple pada tombol panah
    document.querySelectorAll('.nav-arrow').forEach(arrow => {
        arrow.addEventListener('click', function(e) {
            createRipple(e, this);
        });
    });
    
    // Tambahkan event listener untuk resize window
    window.addEventListener('resize', function() {
        if (isModalOpen) {
            adjustModalLayout();
            setBannerDefaultSizes();
        }
    });
    
    // Event listener untuk scroll otomatis ke top saat masuk view 2 atau 3
    window.addEventListener('scrollToTopView', function() {
        if (document.getElementById('aspect-container')) {
            document.getElementById('aspect-container').scrollTop = 0;
        }
        if (document.getElementById('data-list-container')) {
            document.getElementById('data-list-container').scrollTop = 0;
        }
    });
};

function toggleSound() {
    isMuted = !isMuted;
    const icon = document.getElementById('sound-icon');
    const bgAudio = document.getElementById('bg-music');
    
    bgAudio.muted = isMuted;

    if(isMuted) {
        icon.className = 'fa-solid fa-volume-xmark';
    } else {
        icon.className = 'fa-solid fa-volume-high';
        bgAudio.play().catch(() => {});
    }
}

function masukWeb() {
    const introVid = document.getElementById('intro-vid');
    introVid.pause(); 
    document.getElementById('intro-layer').style.display = 'none';
    document.getElementById('main-header').style.display = 'flex';
    
    const bgAudio = document.getElementById('bg-music');
    bgAudio.muted = true;
    bgAudio.play().catch(e => console.log("Audio policy handled"));

    loadRegion(0);
    document.body.classList.add('view-1-active');
}

function loadRegion(index) {
    currentIndex = index;
    const data = db[index];
    const root = document.documentElement;
    
    root.style.setProperty('--theme-color', data.color);
    root.style.setProperty('--hover-color', data.hoverColor);
    
    // Tambahkan class indo-active untuk Indonesia
    if (index === 0) { // Indonesia
        document.body.classList.add('indo-active');
    } else {
        document.body.classList.remove('indo-active');
    }
    
    document.getElementById('region-title-top').innerText = data.title;
    
    const vid = document.getElementById('bg-video');
    const img = document.getElementById('bg-image');
    
    vid.pause();
    vid.classList.remove('active-bg');
    img.classList.remove('active-bg');
    
    if (data.backgrounds?.view1?.type === 'video') {
        const src = data.backgrounds.view1.src;

        if (vid.getAttribute('src') !== src) {
            vid.src = src;
            vid.load();
        }

        vid.classList.add('active-bg');
        vid.play().catch(()=>{});
    } else if (data.backgrounds?.view1?.type === 'image') {
        img.style.backgroundImage = `url('${data.backgrounds.view1.src}')`;
        img.classList.add('active-bg');
    }
    
    const audio = document.getElementById('bg-music');
    if(audio.getAttribute('src') !== data.audio) {
        audio.src = data.audio;
        audio.muted = isMuted; 
        audio.play().catch(() => {});
    }
    
    // PERUBAHAN: Update gambar cover
    const coverImg = document.getElementById('cover-img');
    if (coverImg) {
        coverImg.src = data.coverImage;
        coverImg.onload = function() {
            // Setelah gambar load, atur sebagai background card-visual juga
            const cardVisual = document.querySelector('.card-visual');
            if (cardVisual) {
                cardVisual.style.backgroundImage = `url('${data.coverImage}')`;
            }
        };
    }
    
    document.getElementById('cover-title').innerText = data.title;
    document.getElementById('cover-subtitle').innerText = data.subtitle;
    
    // Tampilkan view 1
    hideAllViews();
    document.getElementById('view-1').style.display = 'flex';
    
    document.body.classList.add('view-1-active');
    document.body.classList.remove('blur-bg');
    document.body.classList.remove('hide-back-btn');
    document.body.classList.remove('modal-accent');
    document.body.classList.remove('view-4-active');
}

function gantiDaerah(arah) {
    const view1 = document.getElementById('view-1');
    const leftArrow = document.querySelector('.nav-arrow.left');
    const rightArrow = document.querySelector('.nav-arrow.right');
    
    // Tambahkan animasi pada tombol panah
    if (arah > 0) {
        // Klik panah kanan -> cover geser ke kiri keluar
        if (rightArrow) rightArrow.classList.add('right-click');
        view1.classList.add('slide-left-out');
    } else {
        // Klik panah kiri -> cover geser ke kanan keluar
        if (leftArrow) leftArrow.classList.add('left-click');
        view1.classList.add('slide-right-out');
    }
    
    setTimeout(() => {
        let newIndex = currentIndex + arah;
        if (newIndex < 0) newIndex = db.length - 1;
        if (newIndex >= db.length) newIndex = 0;
        
        // Hapus semua class animasi sebelum load region baru
        view1.classList.remove('slide-left-out', 'slide-right-out', 'slide-left-in', 'slide-right-in');
        
        // Load region baru
        loadRegion(newIndex);
        
        // Reset animasi tombol
        if (arah > 0) {
            if (rightArrow) rightArrow.classList.remove('right-click');
        } else {
            if (leftArrow) leftArrow.classList.remove('left-click');
        }
        
        // Tambahkan animasi masuk yang berlawanan arah
        setTimeout(() => {
            if (arah > 0) {
                // Cover masuk dari kanan (setelah klik panah kanan)
                view1.classList.add('slide-right-in');
            } else {
                // Cover masuk dari kiri (setelah klik panah kiri)
                view1.classList.add('slide-left-in');
            }
            
            // Hapus animasi masuk setelah selesai
            setTimeout(() => {
                view1.classList.remove('slide-left-in', 'slide-right-in');
            }, 400);
        }, 10);
        
        document.body.style.opacity = 1;
    }, 400);
}

function hideAllViews() {
    document.querySelectorAll('.view-section').forEach(v => {
        v.style.display = 'none';
    });
}

function resetKeView1() {
    hideAllViews();
    document.getElementById('view-1').style.display = 'flex';

    // Reset semua animasi transisi
    const view1 = document.getElementById('view-1');
    view1.classList.remove('slide-left-out', 'slide-right-out', 'slide-left-in', 'slide-right-in');
    view1.style.opacity = '1';
    view1.style.transform = 'translateX(0)';

    document.body.classList.add('view-1-active');
    document.body.classList.remove('blur-bg');
    document.body.classList.remove('hide-back-btn');
    document.body.classList.remove('modal-accent');
    document.body.classList.remove('view-4-active');
    setBackground('view1');
    
    const data = db[currentIndex];
    const audio = document.getElementById('bg-music');
    if(audio.getAttribute('src') !== data.audio) {
        audio.src = data.audio;
        audio.muted = isMuted; 
        audio.play().catch(() => {});
    }
}

function masukTampilan2() {
    const card = document.querySelector('.main-card');
    card.classList.add('click-anim');
    setTimeout(() => {
        card.classList.remove('click-anim');
        const data = db[currentIndex];
        hideAllViews();
        if (data.type === 'indo') {
            siapkanView3(data.data); 
        } else {
            siapkanView2(data); 
        }
        // Scroll ke atas saat masuk view 2
        setTimeout(() => {
            window.dispatchEvent(new Event('scrollToTopView'));
        }, 100);
    }, 500);
}

// 1. UPDATE FUNGSI siapkanView2 (Untuk Tampilan Aspek - Beda Animasi & Hover Per Region)
// ==========================================================
// CARI FUNCTION "siapkanView2" LALU TIMPA DENGAN INI
// ==========================================================
function siapkanView2(data) {
    hideAllViews();
    document.getElementById('view-2').style.display = 'flex';
    document.getElementById('view-2-region').innerText = data.title;
    document.body.classList.remove('view-1-active'); 
    document.body.classList.add('blur-bg');
    document.body.classList.add('hide-back-btn');
    
    setBackground('view2');
    
    const audio = document.getElementById('bg-music');
    if(audio.getAttribute('src') !== data.audio) {
        audio.src = data.audio;
        audio.muted = isMuted; 
        audio.play().catch(() => {});
    }

    const container = document.getElementById('aspect-container');
    
    // RESET CONTAINER 
    container.className = 'aspect-container'; 
    container.innerHTML = '';
    container.scrollTop = 0; 

    // CONFIG ANIMASI (MASUK, HOVER, KELUAR)
    const animConfig = {
        'bali':     { in: 'anim-parallax', hov: 'hover-tilt',   out: 'exit-bali' },
        'baubau':   { in: 'anim-swirl',    hov: 'hover-pulse',  out: 'exit-baubau' },
        'mentawai': { in: 'anim-cascade',  hov: 'hover-breath', out: 'exit-mentawai' },
        'sulsel':   { in: 'anim-sail',     hov: 'hover-wind',   out: 'exit-sulsel' },
        'papua':    { in: 'anim-fog',      hov: 'hover-aurora', out: 'exit-papua' }
    };
    
    const theme = animConfig[data.id] || { in: '', hov: '', out: '' };

    data.aspects.forEach((asp, index) => {
        const div = document.createElement('div');
        div.className = `aspect-card ${theme.in} ${theme.hov}`;
        div.style.setProperty('--i', index); 

        let visualImg = '';
        if (data.aspectImages && data.aspectImages[asp]) {
            visualImg = data.aspectImages[asp];
        } else if (data.details && data.details[asp] && data.details[asp][0]) {
            visualImg = data.details[asp][0].img;
        }

        div.innerHTML = `
            <img src="${visualImg}" alt="${asp}">
            <div class="aspect-label">${asp}</div>
        `;

        // === LOGIKA BARU: ANIMASI KELUAR SEBELUM PINDAH ===
        div.onclick = () => {
            // 1. Trigger animasi exit di CSS
            if (theme.out) {
                container.classList.add(theme.out);
            }

            // 2. Delay 700ms baru pindah halaman
            setTimeout(() => {
                let listData = [];
                if (data.details && data.details[asp]) {
                    listData = data.details[asp];
                }
                
                siapkanView3(listData, asp);
                
                // Efek masuk smooth untuk View 3
                const v3Container = document.getElementById('data-list-container');
                if(v3Container) {
                    v3Container.classList.remove('page-enter-smooth');
                    void v3Container.offsetWidth; // Reset animasi
                    v3Container.classList.add('page-enter-smooth');
                }
                
            }, 700); 
        };
        // ==================================================

        container.appendChild(div);
    });
    
    setTimeout(() => { if (container) container.scrollTop = 0; }, 50);
}

// 2. UPDATE FUNGSI siapkanView3 (Untuk Data List - Hover Beda Warna)
function siapkanView3(dataList, judulAspek = "") {
    hideAllViews();
    document.getElementById('view-3').style.display = 'flex';
    document.body.classList.remove('view-1-active'); 
    document.body.classList.add('blur-bg');
    setBackground('view34');
    
    const currentData = db[currentIndex]; 
    
    const audio = document.getElementById('bg-music');
    if(currentData.audioView && audio.getAttribute('src') !== currentData.audioView) {
        audio.src = currentData.audioView;
        audio.muted = isMuted; 
        audio.play().catch(() => {});
    }
    
    if (currentData.type === 'indo') {
        document.body.classList.add('hide-back-btn');
    } else {
        document.body.classList.remove('hide-back-btn');
    }
    
    document.getElementById('view-3-title').innerText = judulAspek ? `${currentData.title} - ${judulAspek}` : currentData.title;

    const container = document.getElementById('data-list-container');
    container.innerHTML = '';
    container.scrollTop = 0; 

    dataList.forEach((item, index) => {
        const div = document.createElement('div');
        div.style.setProperty('--i', index); 
        div.style.borderColor = currentData.color;

        // Cek apakah ini Indonesia (Flag) atau Region Lain (Smooth)
        const baseAnim = (currentData.id === 'indo') ? 'anim-flag' : 'anim-slide-smooth';
        
        // Tambahkan ID region ke class biar CSS bisa bedain warnanya
        div.className = `data-card ${baseAnim} region-${currentData.id}`;

        div.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            <div class="data-label">${item.title}</div>
        `;
        div.onclick = () => masukTampilan4(item);
        container.appendChild(div);
    });
    
    setTimeout(() => { if (container) container.scrollTop = 0; }, 50);
}

function kembaliKeView1() { 
    resetKeView1(); 
}

function kembaliKeView2() {
    const data = db[currentIndex];
    if (data.type === 'indo') {
        resetKeView1();
    } else {
        siapkanView2(data);
    }
}

function kembaliKeView3() {
    hideAllViews();
    document.getElementById('view-3').style.display = 'flex';

    document.body.classList.remove('view-1-active');
    document.body.classList.add('blur-bg');
    document.body.classList.remove('view-4-active');

    if (db[currentIndex].type === 'indo') {
        document.body.classList.add('hide-back-btn');
    } else {
        document.body.classList.remove('hide-back-btn');
    }

    setBackground('view34');
    
    const data = db[currentIndex];
    const audio = document.getElementById('bg-music');
    if(data.audioView && audio.getAttribute('src') !== data.audioView) {
        audio.src = data.audioView;
        audio.muted = isMuted; 
        audio.play().catch(() => {});
    }
    
    // Scroll ke atas saat kembali ke view 3
    setTimeout(() => {
        const container = document.getElementById('data-list-container');
        if (container) {
            container.scrollTop = 0;
        }
    }, 50);
}

function tutupSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('open');
    document.body.classList.remove('sidebar-open');
    document.body.classList.remove('modal-accent');
    
    const data = db[currentIndex];
    const root = document.documentElement;
    root.style.setProperty('--theme-color', data.color);
    root.style.setProperty('--hover-color', data.hoverColor);
}

function masukTampilan4(item) {
    document.body.classList.remove('view-1-active');
    document.body.classList.add('blur-bg');
    document.body.classList.remove('hide-back-btn');

    hideAllViews();
    document.getElementById('view-4').style.display = 'flex';
    setBackground('view34');
    
    const data = db[currentIndex];
    const audio = document.getElementById('bg-music');
    if(data.audioView && audio.getAttribute('src') !== data.audioView) {
        audio.src = data.audioView;
        audio.muted = isMuted; 
        audio.play().catch(() => {});
    }

    const view4 = document.getElementById('view-4');
    view4.className = `view-section glass-mode reveal-${db[currentIndex].id}`;

    document.getElementById('detail-img').src = item.img;
    document.getElementById('detail-title').innerText = item.title;
    document.getElementById('detail-title').style.color = db[currentIndex].color;
    document.getElementById('detail-desc').innerText = item.desc;
}

function setBackground(viewKey) {
    const data = db[currentIndex];
    const bg = data.backgrounds?.[viewKey];

    const video = document.getElementById('bg-video');
    const image = document.getElementById('bg-image');

    video.pause();
    video.classList.remove('active-bg');
    image.classList.remove('active-bg');

    if (!bg) return;

    if (bg.type === 'video') {
        video.muted = true;
        video.playsInline = true;
        video.loop = true;

        if (video.getAttribute('src') !== bg.src) {
            video.src = bg.src;
            video.load();
        }

        video.classList.add('active-bg');
        video.play().catch(() => {
            console.log('Autoplay ditahan browser');
        });
    } else if (bg.type === 'image') {
        image.style.backgroundImage = `url('${bg.src}')`;
        image.classList.add('active-bg');
    }
}

function bukaSidebar() {
    document.getElementById('sidebar').classList.add('open');
    document.body.classList.add('sidebar-open');
}

function aktifkanBannerInteraction(container) {
    const items = container.querySelectorAll(".acc-item");

    items.forEach(item => {
        item.addEventListener("click", () => {
            // Hentikan semua animasi yang sedang berjalan
            items.forEach(i => {
                i.classList.remove("active");
                i.style.transition = 'all 0.4s ease'; // Transisi smooth
                i.style.transform = 'scale(1)';
                i.style.width = '220px';
                i.style.height = '380px';
            });
            
            // Aktifkan item yang diklik
            item.classList.add("active");
            item.style.transition = 'all 0.4s ease';
            item.style.transform = 'scale(1.05)';
            item.style.width = '280px';
            item.style.height = '480px';
            
            // Center ulang konten setelah animasi
            setTimeout(() => {
                centerBannerContent();
            }, 400);
        });
        
        item.addEventListener("mouseenter", () => {
            if (!item.classList.contains("active")) {
                item.style.transform = 'scale(1.03)';
                item.style.transition = 'transform 0.3s ease';
            }
        });
        
        item.addEventListener("mouseleave", () => {
            if (!item.classList.contains("active")) {
                item.style.transform = 'scale(1)';
                item.style.transition = 'transform 0.3s ease';
            }
        });
    });
}

// Fungsi baru untuk menyesuaikan layout modal
function adjustModalLayout() {
    const modalBody = document.querySelector('.modal-body');
    const wrap = document.getElementById('modal-banner-wrap');
    
    if (!modalBody || !wrap) return;
    
    // Hapus kelas scrollable yang mungkin mengganggu
    modalBody.classList.remove('scrollable');
    
    // Reset overflow
    modalBody.style.overflow = '';
    
    // Cek lebar layar
    if (window.innerWidth <= 768) {
        // Mode mobile - scroll horizontal
        modalBody.style.justifyContent = 'flex-start';
        modalBody.style.alignItems = 'center';
        modalBody.style.overflowX = 'auto';
        modalBody.style.overflowY = 'hidden';
        
        // Hitung total lebar banner
        const items = wrap.querySelectorAll('.acc-item');
        let totalWidth = 0;
        items.forEach(item => {
            totalWidth += item.offsetWidth + 20; // width + gap
        });
        
        // Set lebar container untuk scroll horizontal
        wrap.style.minWidth = `${totalWidth}px`;
        
        // Reset transform scale
        wrap.style.transform = 'scale(1)';
    } else {
        // Mode desktop - tengah tanpa scroll
        modalBody.style.justifyContent = 'center';
        modalBody.style.alignItems = 'center';
        modalBody.style.overflow = 'hidden';
        
        // Reset lebar container
        wrap.style.minWidth = 'auto';
        
        // Hitung jika banner terlalu lebar untuk container
        const containerWidth = modalBody.clientWidth;
        const gridWidth = wrap.scrollWidth;
        
        if (gridWidth > containerWidth) {
            // Jika terlalu lebar, scale down sedikit
            const scale = containerWidth / gridWidth * 0.85;
            wrap.style.transform = `scale(${scale})`;
            wrap.style.transformOrigin = 'center center';
        } else {
            wrap.style.transform = 'scale(1)';
        }
    }
}

function bukaModal(judul) {
    document.getElementById("modal-title").innerText = judul;
    document.getElementById("modal-overlay").classList.add("show");
    document.body.classList.add('modal-accent');
    isModalOpen = true;
    
    const root = document.documentElement;
    if (judul === "ABOUT US") {
        root.style.setProperty('--theme-color', 'var(--accent-about)');
        root.style.setProperty('--hover-color', 'var(--accent-about)');
        document.body.classList.add('about-mode');
        document.body.classList.remove('contact-mode');
    } else if (judul === "CONTACT US") {
        root.style.setProperty('--theme-color', 'var(--accent-contact)');
        root.style.setProperty('--hover-color', 'var(--accent-contact)');
        document.body.classList.add('contact-mode');
        document.body.classList.remove('about-mode');
    }
    
    const modal = document.getElementById("modal-content");
    modal.innerHTML = `<div class="aspect-grid" id="modal-banner-wrap"></div>`;
    
    const wrap = document.getElementById("modal-banner-wrap");
    
    let dataList = judul === "ABOUT US" ? members : contacts;
    
    wrap.innerHTML = dataList.map((item, i) => `
        <div class="acc-item ${i === 0 ? "active" : ""}" 
             style="background-image: url('${modalBackgrounds[judul]}');">
            <div class="banner-img-layer"></div>
            <div class="acc-name-rot">
                ${judul === "ABOUT US" ? item.shortName : item.shortName}
            </div>
            <div class="acc-data-content">
                <h3>${item.name}</h3>
                <p>${item.sub}</p>
                <p>${item.det1}</p>
                <p>${item.det2}</p>
            </div>
        </div>
    `).join("");
    
    aktifkanBannerInteraction(wrap);
    
    // Set timeout untuk memastikan DOM telah dirender
    setTimeout(() => {
        adjustModalLayout();
        setBannerDefaultSizes();
        ensureModalHeight();
    }, 100);
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('show');
    document.body.classList.remove('modal-accent');
    document.body.classList.remove('about-mode');
    document.body.classList.remove('contact-mode');
    isModalOpen = false;
    
    const data = db[currentIndex];
    const root = document.documentElement;
    root.style.setProperty('--theme-color', data.color);
    root.style.setProperty('--hover-color', data.hoverColor);
}

function ensureModalHeight() {
    const modalBox = document.querySelector('.modal-box');
    const modalBody = document.querySelector('.modal-body');
    
    if (modalBox && modalBody) {
        modalBox.style.height = '80vh';
        modalBox.style.maxHeight = '80vh';
        
        const modalHeader = document.querySelector('.modal-header');
        if (modalHeader) {
            const headerHeight = modalHeader.offsetHeight;
            const maxBodyHeight = `calc(80vh - ${headerHeight}px)`;
            modalBody.style.maxHeight = maxBodyHeight;
        }
    }
}

function centerBannerContent() {
    const modalBody = document.querySelector('.modal-body');
    const gridWrap = modalBody.querySelector('.aspect-grid');
    
    if (!gridWrap) return;
    
    modalBody.classList.remove('scrollable');
    
    setTimeout(() => {
        const bodyHeight = modalBody.clientHeight;
        const gridHeight = gridWrap.scrollHeight;
        
        if (gridHeight > bodyHeight - 40) {
            modalBody.classList.add('scrollable');
        } else {
            modalBody.style.alignItems = 'center';
        }
    }, 100);
}

// Sidebar menu event listeners
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sidebar-list').querySelectorAll('li')[0].onclick = function() {
        tutupSidebar();
        currentIndex = 0;
        loadRegion(0);
        document.getElementById('region-title-top').innerText = db[0].title;
    };
    
    document.getElementById('sidebar-list').querySelectorAll('li')[1].onclick = function() {
        bukaModal("ABOUT US");
    };
    
    document.getElementById('sidebar-list').querySelectorAll('li')[2].onclick = function() {
        bukaModal("CONTACT US");
    };
    
    const mainCard = document.querySelector('.main-card');
    if (mainCard) {
        mainCard.addEventListener('mouseenter', function() {
            const coloredLine = this.querySelector('.colored-line');
            if (coloredLine) {
                coloredLine.style.width = '100px';
                coloredLine.style.transition = 'width 0.3s ease';
            }
        });
        
        mainCard.addEventListener('mouseleave', function() {
            const coloredLine = this.querySelector('.colored-line');
            if (coloredLine) {
                coloredLine.style.width = '80px';
            }
        });
    }
});

function setBannerDefaultSizes() {
    const bannerItems = document.querySelectorAll('.acc-item');
    bannerItems.forEach(item => {
        if (!item.classList.contains('active')) {
            item.style.width = '220px';
            item.style.height = '380px';
        } else {
            item.style.width = '280px';
            item.style.height = '480px';
        }
    });
}

function updateNavHeightAndScroll() {
    const nav = document.querySelector('.nav-buttons');
    const view = document.querySelector('#view-2.active, #view-3.active');
    const container = view?.querySelector('#aspect-container, .data-list-container');

    if (!nav || !view || !container) return;

    const navHeight = nav.offsetHeight;
    document.documentElement.style.setProperty('--nav-h', `${navHeight}px`);

    // Cek apakah konten MUAT tanpa scroll
    if (container.scrollHeight <= container.clientHeight + 5) {
        view.classList.add('no-scroll');
    } else {
        view.classList.remove('no-scroll');
    }
}

window.addEventListener('resize', updateNavHeightAndScroll);
window.addEventListener('load', updateNavHeightAndScroll);

// Panggil juga SETIAP ganti view
document.addEventListener('viewChanged', updateNavHeightAndScroll);

function syncNavHeight() {
    const nav = document.querySelector('.nav-buttons');
    if (nav) {
        document.documentElement.style.setProperty(
            '--nav-h',
            nav.offsetHeight + 'px'
        );
    }
}

window.addEventListener('load', syncNavHeight);
window.addEventListener('resize', syncNavHeight);

