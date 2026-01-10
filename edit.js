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
            view2: { type: 'image', src: 'ok.jpg' },
            view34: { type: 'image', src: 'oke.jpg' }
        },
        audio: 'balisatu.mpeg', 
        audioView: 'balidua.mpeg',
        animClass: 'reveal-bali',
        type: 'normal',
        aspects: ['SEJARAH', 'BAHASA', 'BUDAYA', 'AKSARA'],
        aspectImages: {
            'SEJARAH': 'sejarahbali.jpg',
            'BAHASA': 'bahasabali.jpg',
            'BUDAYA': 'puputanklungkung.jpeg',
            'AKSARA': 'aksarabali.jpg'
        },
        details: {
            'SEJARAH': [
                { title: "Walidwipa & Jejak Awal Peradaban", img: "purabesakih.jpeg", desc: "Nama Bali berasal dari kata Sanskerta “Wali” yang berarti persembahan suci. Penyebutan tertua terdapat pada Prasasti Blanjong (913 M) di Sanur yang menyebut Bali sebagai Walidwipa. Masuknya Hindu dipelopori oleh Rsi Markandeya pada abad ke-8 dengan konsep Panca Datu yang menjadi dasar berdirinya Pura Besakih." },
                { title: "Warisan Majapahit & Identitas Bali", img: "warisanmajapahit.jpeg", desc: "Penaklukan Bali oleh Majapahit pada tahun 1343 M membawa pengaruh besar. Bangsawan dan pendeta dari Jawa bermigrasi ke Bali setelah runtuhnya Majapahit dan meleburkan Hindu Siwa-Buddha dengan kepercayaan lokal, membentuk Hindu Dharma Bali yang khas dan bertahan hingga kini." },
                { title: "Puputan Badung & Klungkung", img: "puputanbadung.jpeg", desc: "Puputan adalah perang kehormatan hingga titik darah terakhir. Puputan Badung (1906) dan Puputan Klungkung (1908) menjadi simbol perlawanan rakyat Bali terhadap kolonialisme Belanda." },
                { title: "Dari Agraris ke Pariwisata Budaya", img: "agrarisbudayabali.jpg", desc: "Bali resmi menjadi provinsi pada tahun 1958. Sejak 1970-an, Bali bertransformasi dari masyarakat agraris menjadi pusat pariwisata budaya dunia tanpa meninggalkan nilai adat dan spiritual." }
            ],
            'BAHASA': [
                { title: "Etika Bicara dalam Bahasa Bali", img: "etikabicarabali.jpg", desc: "Bahasa Bali memiliki sistem tingkatan yang disebut Sor Singgih, mencerminkan etika sosial masyarakat." },
                { title: "Bahasa Alus", img: "bahasaalusbali.png", desc: "Digunakan untuk berbicara kepada pendeta, orang tua, dan tokoh adat sebagai bentuk penghormatan." },
                { title: "Bahasa Madya", img: "bahasamadyabali.png", desc: "Digunakan dalam percakapan sopan sehari-hari antar sesama." },
                { title: "Bahasa Kasar", img: "bahasakasarbali.png", desc: "Digunakan dalam kondisi marah atau kepada hewan, mencerminkan ekspresi emosi manusia." }
            ],
            'BUDAYA': [
                { title: "Hari Nyepi", img: "nyepi.jpeg", desc: "Hari hening total selama 24 jam untuk introspeksi diri dan pemulihan alam (Mulatsarira)." },
                { title: "Ngaben", img: "ngaben.jpeg", desc: "Upacara kremasi untuk mempercepat kembalinya unsur tubuh (Panca Maha Bhuta) ke alam semesta." },
                { title: "Ogoh-Ogoh", img: "ogohogohbali.jpg", desc: "Patung raksasa simbol sifat buruk manusia (Bhuta Kala) yang diarak dan dibakar sebelum Nyepi." },
                { title: "Metatah (Potong Gigi)", img: "metatah.jpeg", desc: "Ritual pendewasaan untuk menghilangkan enam sifat buruk manusia (Sad Ripu)." },
                { title: "Tari Kecak", img: "tari-kecak.webp", desc: "Tarian tradisional Bali yang ditampilkan oleh sekelompok pria yang duduk melingkar sambil meneriakkan “cak, cak, cak” secara ritmis. Tarian ini menceritakan kisah Ramayana, terutama bagian perjuangan Rama melawan Rahwana. Tari Kecak tidak diiringi alat musik, melainkan menggunakan suara manusia sebagai pengiring, dan biasanya dipentaskan pada sore atau malam hari dengan suasana yang dramatis." },
            ],
            'AKSARA': [
                { title: "Aksara Bali (Hanacaraka)", img: "aksarahanacarakabali.jpg", desc: "Memiliki 18 huruf utama (Wreastra) dan dianggap memiliki nilai spiritual." },
                { title: "Media Lontar", img: "medialontarbali.jpg", desc: "Ditulis di daun lontar menggunakan pisau pengrupak dan dihitamkan dengan kemiri bakar." },
                { title: "Aksara Modre", img: "aksaramodrebali.jpg", desc: "Aksara sakral yang digunakan untuk mantra, jimat, dan pengobatan spiritual." },
                { title: "Fungsi Sakral Aksara", img: "fungsisakralaksarabali.jpg", desc: "Aksara Bali merupakan bagian dari ritual keagamaan dan adat, bukan sekadar tulisan." }
            ]
        }
    },
    {
        id: 'baubau',
        title: 'BAU BAU',
        subtitle: 'NEGERI KHALIFATUL KHAMIS',
        color: '#FFD700',
        hoverColor: '#FFD700',
        coverImage: 'coverbaubau.jpg',
        backgrounds: {
            view1: { type: 'image', src: 'coverbaubau.jpg' },
            view2: { type: 'image', src: 'Bbaubau1.jpg' },
            view34: { type: 'image', src: 'Bbaubau2.jpg' }
        },
        audio: 'baubausatu.mpeg',
        audioView: 'baubaudua.mpeg',
        animClass: 'reveal-baubau',
        type: 'normal',
        aspects: ['SEJARAH', 'BAHASA', 'BUDAYA', 'AKSARA'],
        aspectImages: {
            'SEJARAH': 'sejarahbaubau.jpg',
            'BAHASA': 'bahasabaubau.jpg',
            'BUDAYA': 'budayabaubau.jpeg',
            'AKSARA': 'aksarabaubau.jpg'
        },
        details: {
            'SEJARAH': [
                { title: "Benteng Terluas di Dunia", img: "bentengterluas.jpg", desc: "Memiliki Benteng Keraton Buton yang diakui Guinness World Records sebagai benteng terluas (23,375 hektar)." },
                { title: "Kedaulatan Unik", img: "kedaulatanunikbaubau.jpg", desc: "Satu-satunya kerajaan di Indonesia yang tidak pernah dijajah secara fisik oleh Belanda (status sebagai sekutu/protektorat)." },
                { title: "Sistem Demokrasi", img: "sistemdemokrasibaubau.jpg", desc: "Sultan Buton dipilih melalui proses seleksi ketat oleh dewan rakyat (Siolimbona), bukan hanya berdasarkan garis keturunan." },
                { title: "Transisi Agama", img: "agamabaubau.jpeg", desc: "Bermula dari kerajaan Hindu-Buddha hingga menjadi kesultanan Islam yang kuat di jalur perdagangan rempah." }
            ],
            'BAHASA': [
                { title: "Bahasa Wolio", img: "bahasawoliobaubau.jpg", desc: "Bahasa resmi kesultanan yang digunakan dalam komunikasi pemerintahan dan sastra." },
                { title: "Bahasa Cia-Cia", img: "bahasaciaciabaubau.png", desc: "Bahasa yang unik karena secara resmi menggunakan huruf Hangul (Korea) untuk penulisannya." },
                { title: "Bahasa Pancana", img: "bahasapancana.jpeg", desc: "Digunakan oleh masyarakat di pesisir tengah Pulau Buton." },
                { title: "Bahasa Muna", img: "bahasamunabaubau.jpg", desc: "Meskipun serumpun, memiliki dialek berbeda yang digunakan di wilayah otoritas Buton." }
            ],
            'BUDAYA': [
                { title: "Tradisi Pakande-kandea", img: "pakandekandeabaubau.jpg", desc: "Perjamuan makan bersama dalam jumlah besar sebagai bentuk rasa syukur dan penyambutan tamu." },
                { title: "Ritual Pedhole-dhole", img: "pedholedholebaubau.jpeg", desc: "Upacara tradisional untuk anak-anak (imunisasi batin) agar terhindar dari penyakit dan marabahaya." },
                { title: "Tari Linda", img: "tarilinda.jpg", desc: "Tarian tradisional yang melambangkan proses transisi seorang gadis menjadi dewasa (pingitan)." },
                { title: "Kearifan Lingkungan (Kaombo)", img: "kaombo.jpg", desc: "Sistem pelarangan pengambilan hasil alam di wilayah tertentu pada waktu tertentu untuk menjaga ekosistem." }
            ],
            'AKSARA': [
                { title: "Aksara Wolio (Buri Wolio)", img: "buriwolio.jpg", desc: "Modifikasi huruf Arab yang disesuaikan dengan bunyi bahasa lokal (mirip huruf Pegon di Jawa)." },
                { title: "Huruf Hangul", img: "hangulbaubau.jpg", desc: "Digunakan secara khusus oleh suku Cia-Cia karena kecocokan fonetik untuk melestarikan bahasa lisan mereka." },
                { title: "Naskah Kuno", img: "naskahkunobaubau.png", desc: "Banyak dokumen sejarah ditulis di atas kertas Eropa atau daun lontar menggunakan tinta alami." },
                { title: "Fungsi Diplomasi", img: "diplomasibaubau.jpg", desc: "Aksara ini dahulu digunakan untuk surat-menyurat resmi antar kerajaan di Nusantara." }
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
                { title: "Suku Mentawai", img: "sukumentawai.jpeg", desc: "Salah satu masyarakat adat tertua yang hidup terisolasi dan menjaga budaya asli." },
                { title: "Sistem Uma", img: "uma.jpeg", desc: "Rumah adat sekaligus pusat kehidupan sosial dan ritual." },
                { title: "Kontak Dunia Luar", img: "kontakdunialuar.jpeg", desc: "Masuknya misionaris dan kolonial membawa perubahan sosial besar." },
                { title: "Pelestarian Budaya", img: "melestarikanmentawai.jpeg", desc: "Upaya mempertahankan adat di tengah modernisasi." }
            ],
            'BAHASA': [
                { title: "Bahasa Mentawai", img: "bahasamentawai.png", desc: "Bahasa Austronesia yang digunakan dalam kehidupan sehari-hari dan ritual." },
                { title: "Dialek Lokal", img: "dialeklokal.jpg", desc: "Memiliki variasi antar pulau dan wilayah." },
                { title: "Bahasa Ritual", img: "bahasaritual.jpeg", desc: "Digunakan dalam upacara adat dan mantra." },
                { title: "Ancaman Kepunahan", img: "ancamanpunah.jpg", desc: "Modernisasi mengancam keberlangsungan bahasa Mentawai." }
            ],
            'BUDAYA': [
                { title: "Tato Mentawai", img: "tatomentawai.jpeg", desc: "Simbol identitas, status sosial, dan hubungan manusia dengan alam." },
                { title: "Sikerei", img: "sikereimentawai.jpeg", desc: "Tabib dan pemimpin spiritual dalam masyarakat Mentawai." },
                { title: "Berburu Tradisional", img: "berburumentawai.jpeg", desc: "Dilakukan dengan aturan adat ketat demi keseimbangan alam." },
                { title: "Arat Sabulungan", img: "aratsabulungan.jpeg", desc: "Sistem kepercayaan yang menghormati roh alam dan leluhur." }
            ],
            'AKSARA': [
                { title: "Tradisi Lisan", img: "tradisilisanmentawai.jpeg", desc: "Budaya Mentawai tidak mengenal aksara tulis tradisional." },
                { title: "Simbol Tato", img: "simboltatomentawai.jpg", desc: "Motif tato berfungsi sebagai bahasa simbolik tubuh." },
                { title: "Ukiran dan Ornamen", img: "ukiranornamenmentawai.jpeg", desc: "Digunakan sebagai media ekspresi budaya dan spiritual." },
                { title: "Dokumentasi Modern", img: "modernaksaramentawai.jpg", desc: "Bahasa dan budaya Mentawai mulai ditranskripsikan oleh peneliti." }
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
                { title: "Masa Prasejarah", img: "sejarahsulsel1.jpg", desc: "Jejak manusia di Sulawesi Selatan sangat tua. Suku bangsa awal penghuni wilayah ini diperkirakan adalah keturunan dari migrasi rumpun Austronesia yang datang sekitar 3000-1500 SM. Di kawasan karst Maros–Pangkep ditemukan lukisan gua berusia puluhan ribu tahun—termasuk cap tangan dan gambar hewan—menjadikannya salah satu seni gua tertua di dunia. Budaya Megalitik dan tradisi pemakaman batu masih dapat ditemukan, terutama di wilayah Toraja, yang menjadi ciri khas periode ini. Ini menunjukkan wilayah ini sudah lama dihuni dan memiliki tradisi budaya awal yang kuat. Masyarakat awal hidup dari berburu dan mengumpulkan makanan sebelum beralih ke pertanian padi sawah sekitar abad ke-13, yang kemudian memicu terbentuknya struktur sosial yang lebih kompleks." },
                { title: "Awal Kerajaan Lokal (Abad ke-13-15)", img: "sejarahsulsel2.jpg", desc: "Pada masa ini, muncul entitas politik yang disebut Tumanurung (sosok yang dianggap turun dari langit) yang menjadi cikal bakal kerajaan-kerajaan besar, terdiri dari, Kerajaan Luwu, Kerajaan Gowa-Tallo (Makassar), Kerajaan Bone (Bugis), dan Kerajaan Wajo dan Soppeng (Bugis). Kerajaan-kerajaan ini memiliki sistem pemerintahan adat yang tertata, hukum adat (ade’), dan tradisi pencatatan menggunakan aksara Lontara. Naskah besar La Galigo, salah satu epos terpanjang di dunia, lahir dari tradisi ini." },
                { title: "Islamisasi (Abad ke-16-17)", img: "sejarahsulsel3.jpg", desc: "Islam masuk secara damai melalui perdagangan dan dakwah ulama Minangkabau yang dikenal sebagai Dato’ Tallua. Kerajaan Gowa–Tallo memeluk Islam pada awal abad ke-17, lalu berperan besar dalam menyebarkan Islam ke kerajaan Bugis lainnya. Islamisasi mengubah struktur politik, hukum, dan budaya, namun adat lokal tetap bertahan dan berpadu dengan ajaran Islam. Pada masa Sultan Hasanuddin, Kesultanan Gowa menjadi kekuatan maritim besar di Indonesia timur. Pelabuhan Makassar adalah pusat perdagangan internasional yang terbuka bagi semua bangsa. Hal ini memicu konflik dengan VOC Belanda yang ingin memonopoli perdagangan rempah." },
                { title: "Perlawanan terhadap Kolonial (Abad ke-17 – Awal Abad ke-20)", img: "sejarahsulsel4.jpg", desc: "Konflik besar antara Sultan Hasanuddin (yang dijuluki Ayam Jantan dari Timur) melawan VOC yang dibantu oleh Arung Palakka dari Bone. Konflik besar terjadi dalam Perang Makassar, yang berakhir dengan kekalahan Gowa, Perjanjian Bongaya (1667), VOC mulai mendominasi politik dan perdagangan, dan Arung Palakka menjadi penguasa paling kuat di Sulawesi Selatan di bawah pengaruh VOC. Periode ini ditandai dengan persaingan internal antar kerajaan Bugis-Makassar. Namun, perlawanan rakyat Bugis–Makassar tidak pernah benar-benar padam. Kekalahan Gowa memaksa Sultan Hasanuddin menandatangani perjanjian yang membatasi kekuasaan Makassar dan memberi ruang besar bagi monopoli Belanda. Meskipun perlawanan gerilya terus berlanjut di berbagai daerah (termasuk oleh masyarakat Toraja dan Bugis lainnya), Belanda baru benar-benar menguasai seluruh wilayah Sulawesi Selatan secara administratif pada awal abad ke-20. Akibat konflik dan tekanan VOC, banyak orang Bugis bermigrasi ke Sumatera, Kalimantan, Semenanjung Malaya, dan Filipina selatan Diaspora ini menjadikan Bugis dikenal luas sebagai pelaut, pedagang, dan penguasa lokal di berbagai wilayah Nusantara. Belanda secara bertahap menguasai Sulawesi Selatan melalui perjanjian dan kekuatan militer. Pada masa pendudukan Jepang (1942–1945), rakyat mengalami kerja paksa dan kekurangan pangan, tetapi benih nasionalisme makin kuat." },
                { title: "Perjuangan Kemerdekaan & Masa Setelahnya", img: "sejarahsulsel5.jpg", desc: "Setelah 1945, Sulawesi Selatan menjadi salah satu daerah dengan konflik pascakemerdekaan yang berat, salah satunya melalui perjuangan Andi Mappanyukki dan Andi Sultan Daeng Radja, termasuk perlawanan terhadap kembalinya Belanda, dan Peristiwa tragis pembantaian Westerling (1946–1947), yaitu masa kelam di mana terjadi pembantaian ribuan rakyat oleh pasukan khusus Belanda pimpinan Raymond Westerling Setelah pengakuan kedaulatan, Sulawesi Selatan berkembang menjadi pusat ekonomi dan pendidikan Indonesia timur, dengan Makassar sebagai kota utama. Sulawesi Selatan resmi menjadi provinsi bagian dari Negara Kesatuan Republik Indonesia (NKRI) pada tahun 1950, dengan Makassar sebagai ibu kotanya." }
            ],
            'BAHASA': [
                { title: "Bahasa Makassar", img: "basamangkasara.png", desc: "Bahasa ini dituturkan oleh suku Makassar yang mendiami wilayah selatan Sulawesi Selatan, meliputi Kota Makassar, Kabupaten Gowa, Takalar, Jeneponto, Bantaeng, dan sebagian Maros serta Pangkep. Penutur terdiri dari 2,1 juta jiwa, mayoritas suku Makassar." },
                { title: "Bahasa Bugis (Basa Ugi)", img: "basaugi.png", desc: "Bahasa Bugis adalah bahasa dengan jumlah penutur terbanyak di Sulawesi Selatan. Wilayah sebarannya meliputi Kabupaten Bone, Soppeng, Wajo, Sidrap, Pinrang, Barru, Parepare, hingga Sinjai. Penutur terdiri dari 5 juta jiwa." },
                { title: "Bahasa Toraja (Basa Taddek)", img: "basataddek.png", desc: "Bahasa ini dituturkan oleh masyarakat di pegunungan bagian utara, terutama di Kabupaten Tana Toraja dan Toraja Utara. Penutur terdiri dari 1 juta jiwa, mayoritas Suku Toraja." },
                { title: "Bahasa Mandar (Basa Mandar)", img: "basamandar.png", desc: "Meskipun saat ini Sulawesi Barat telah menjadi provinsi sendiri, secara historis dan kultural, bahasa Mandar tetap menjadi bagian integral dari keragaman linguistik di wilayah Celebes Selatan. Wilayah terdiri dari Kabupaten Polewali Mandar, Mamuju, Majene, dan Mamasa (sebagian) di Sulawesi Barat. Secara historis dan budaya masih sangat dekat dengan Sulawesi Selatan. Di Sulawesi Selatan sendiri, penutur Mandar banyak ditemukan di daerah pesisir utara. Penutur terdiri dari 500 ribu jiwa, mayoritas Suku Mandar." }
            ],
            'BUDAYA': [
                { title: "Upacara Adat Rambu Solo' (Toraja)", img: "rambusolo.jpg", desc: "Upacara pemakaman mewah yang bertujuan untuk mengantarkan arwah leluhur ke alam baka (Puya). Upacara ini melibatkan penyembelihan kerbau (terutama kerbau lumpur atau Tedong Bonga yang harganya sangat mahal). Kerbau (tedong) yang mahal (seperti tedong bonga) dan babi dikorbankan, diiringi tarian dan nyanyian. Jenazah disimpan di tongkonan (rumah adat) untuk waktu lama sebelum upacara. Mayat dapat diawetkan. Prosesi berlangsung beberapa hari dengan berbagai ritual seperti Ma'pasilaga Tedong (adu kerbau), Ma'badong (tarian melingkar), dan puncaknya adalah penguburan di tebing batu, liang batu, atau patane (kuburan batu)." },
                { title: "Tradisi Maritim & Perahu Phinisi", img: "kapalphinisi.jpg", desc: "Orang Bugis–Makassar terkenal sebagai pelaut ulung dan perantau. Kapal Pinisi menjadi simbol kejayaan maritim. Perahu Phinisi merupakan mahakarya teknik perkapalan tradisional yang berasal dari Bulukumba. Menariknya, pembuatan kapal ini dilakukan tanpa cetakan biru dan menggunakan ritual khusus dalam setiap tahapannya. Kini, Phinisi telah diakui sebagai Warisan Budaya Takbenda oleh UNESCO." },
                { title: "Adat Pernikahan & Uang Panai'", img: "adatpernikahan.jpg", desc: "Upacara pernikahan dikenal megah dan penuh simbol. Uang panai’ sebagai bentuk penghargaan kepada keluarga mempelai perempuan. Besarnya sering kali ditentukan oleh strata sosial, latar belakang pendidikan, atau prestasi sang wanita. Ini dianggap sebagai simbol penghargaan pria terhadap martabat wanita yang akan dinikahinya. Busana adat berwarna cerah dan sarat makna status sosial. Prosesnya panjang, mencerminkan kehormatan dan keseriusan pernikahan." },
                { title: "Tari Pakarena", img: "taripakarena.jpg", desc: "Tarian khas Gowa/Makassar yang menggambarkan kelembutan dan kesabaran perempuan, namun tetap memiliki ketegasan. Ciri khasnya adalah gerakannya lembut, gemulai, dan lambat, melambangkan karakter perempuan Makassar yang patuh, setia, dan sopan. Penari tidak boleh membuka mata terlalu lebar dan kaki tidak diangkat tinggi. Diiringi oleh gendang (ganrang) dan seruling (puik-puik)." }
            ],
            'AKSARA': [
                { title: "Aksara Lontara", img: "aksaralontara.jpg", desc: "Paling dominan dan paling dikenal di Sulawesi Selatan. Digunakan oleh Bugis, Makassar, dan Mandar." },
                { title: "Aksara Jangan-Jangan (Lontara Kuno)", img: "aksarajanganjangan.jpg", desc: "Sebelum Aksara Lontara yang kita kenal sekarang (Lontara Baru) menjadi standar, masyarakat Makassar menggunakan Aksara Jangan-Jangan." },
                { title: "Aksara Serang (Abjad Jawi Lokal)", img: "aksaraserang.jpeg", desc: "Seiring dengan masuknya agama Islam di Sulawesi Selatan pada awal abad ke-17, muncul pula Aksara Serang." },
                { title: "Lontara Bugis, Makassar, Mandar", img: "lontarabugismakassarmandar.jpg", desc: "Lontara Bugis dipakai dalam naskah epik La Galigo (salah satu karya sastra terpanjang di dunia) dan banyak digunakan untuk sejarah kerajaan, filsafat hidup Bugis, dan Konsep siri’ (harga diri). Lontara Makassar memiliki huruf mirip Lontara Bugis, tetapi memiliki variasi bentuk. Digunakan dalam perjanjian politik, catatan kerajaan Gowa-Tallo, dan hukum adat Makassar. Lontara Mandar berperan dalam mencatat tradisi lisan, hukum adat pesisir, dan pengetahuan pelayaran." }
            ]
        }
    },
    {
        id: 'ntt',
        title: 'Nusa Tenggara Timur',
        subtitle: 'SURGA KECIL',
        color: '#A020F0',
        hoverColor: '#9400D3',
        coverImage: 'ntt1.jpeg',
        backgrounds: {
            view1: { type: 'image', src: 'ntt1.jpeg' },
            view2: { type: 'image', src: 'ntt7.jpeg' },
            view34: { type: 'image', src: 'ntt2.jpeg' }
        },
        audio: 'nttsatu.mpeg',
        audioView: 'nttdua.mpeg',
        animClass: 'reveal-ntt',
        type: 'normal',
        aspects: ['SEJARAH', 'BAHASA', 'BUDAYA', 'AKSARA'],
        aspectImages: {
            'SEJARAH': 'sejarahntt.jpg',
            'BAHASA': 'bahasantt.jpg',
            'BUDAYA': 'ntt5.jpeg',
            'AKSARA': 'aksarantt.jpg'
        },
        details: {
            'SEJARAH': [
                { title: "Penjelasan NTT", img: "penjelasanntt.jpg", desc: "Secara historis, penduduk NTT merupakan percampuran keturunan antara bangsa Melanesia dan Austronesia." },
                { title: "Masa Kerajaan & Kolonial", img: "masakerajaaanntt.jpg", desc: "Sebelum tahun 1900, NTT terdiri dari berbagai kerajaan kecil yang kemudian berubah status menjadi swapraja di bawah pengaruh kolonial. Wilayah ini sempat diperebutkan oleh Portugis dan Belanda karena kekayaan rempahnya." },
                { title: "Pembentukan Provinsi", img: "pembentukanprovinsintt.jpg", desc: "Provinsi NTT secara resmi dibentuk pada 14 Agustus 1958 berdasarkan Undang-Undang Nomor 64 Tahun 1958. Hingga tahun 2025, provinsi ini terus berkembang dan kini terdiri dari 22 kabupaten/kota." }
            ],
            'BAHASA': [
                { title: "Bahasa NTT", img: "bahasaantt.jpg", desc: "NTT dikenal sebagai salah satu provinsi dengan jumlah bahasa daerah terbanyak di Indonesia." },
                { title: "Jumlah Bahasa", img: "bahasaaaantt.jpg", desc: "Hingga tahun 2025, tercatat terdapat sekitar 72 hingga 86 bahasa daerah di seluruh wilayah NTT." },
                { title: "Keberagaman", img: "keberagamanntt.jpg", desc: "Kabupaten Alor menjadi daerah yang paling unik karena memiliki sekitar 32 hingga 42 bahasa dalam satu wilayah. Beberapa bahasa utama yang dominan antara lain Bahasa Dawan, Sabu, Rote, Manggarai, dan Kupang Malay yang sering digunakan sebagai lingua franca atau bahasa pergaulan antar etnis. " }
            ],
            'BUDAYA': [
                { title: "Budaya & Tradisi NTT", img: "budayatradisintt.jpg", desc: "NTT memiliki tradisi yang sangat kuat dan khas, bahkan pada Oktober 2025, sebanyak 25 karya budaya NTT ditetapkan sebagai Warisan Budaya Takbenda (WBTb) Indonesia. " },
                { title: "Ritual & Upacara", img: "upacarantt.jpg", desc: "Tradisi Pasola di Sumba (permainan ketangkasan berkuda dengan melempar lembing) dan Upacara Reba di Ngada merupakan salah satu yang paling populer." },
                { title: "Kesenian", img: "kesenianntt.jpg", desc: "NTT memiliki berbagai tarian seperti Tari Bonet (tari persaudaraan), Tari Hopong (upacara panen), dan alat musik Sasando yang mendunia." },
                { title: "Kriya", img: "kriyantt.jpg", desc: "Tenun Ikat adalah identitas budaya NTT yang sangat tinggi nilainya, di mana setiap daerah memiliki motif dan makna filosofis yang berbeda-beda." }
            ],
            'AKSARA': [
                { title: "Aksara NTT", img: "aksaraantt.jpg", desc: "Berbeda dengan banyak daerah di Indonesia timur yang tidak memiliki sistem tulis asli, NTT memiliki aksara kuno bernama Aksara Lota. " },
                { title: "Asal-usul", img: "asalusulaksarantt.jpg", desc: "Aksara Lota berasal dari Ende, Pulau Flores. Aksara ini merupakan turunan dari aksara Bugis (Lontara) yang dibawa oleh pelaut Bugis dan diadaptasi sesuai dengan dialek lokal Ende." },
                { title: "Penggunaan", img: "penggunaaanaksarantt.jpg", desc: "Dahulu digunakan untuk menulis dokumen adat dan keagamaan. Meskipun saat ini penggunaannya sangat terbatas, pada tahun 2025 terdapat upaya revitalisasi melalui pendidikan di sekolah-sekolah di Ende agar warisan ini tidak punah." }
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
let isIntroAudioPlaying = false;
let introMusic = null;
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
    
    // Inisialisasi audio intro TANPA memulai otomatis
    introMusic = document.getElementById('intro-music');
    introMusic.loop = true;
    introMusic.volume = 0.6;
    introMusic.muted = true; // Muted secara default
    
    // Jangan mainkan otomatis, tunggu interaksi user
    vid.play().catch(e => console.log("Menunggu interaksi user"));
    
    // Hapus autoplay untuk intro music
    // introMusic.play().catch(e => console.log("Audio intro menunggu interaksi"));

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
    
    // PERBAIKAN: Event listener untuk menangani klik pertama user
    document.addEventListener('click', handleFirstUserInteraction, { once: true });
};

function handleFirstUserInteraction() {
    // Mainkan intro music saat pertama kali user berinteraksi
    if (introMusic && document.getElementById('intro-layer').style.display !== 'none') {
        introMusic.muted = isMuted; // Sesuaikan dengan setting mute
        introMusic.play().catch(e => {
            console.log("Gagal memainkan audio intro:", e);
        });
        isIntroAudioPlaying = true;
    }
}

function toggleSound() {
    isMuted = !isMuted;
    const icon = document.getElementById('sound-icon');
    const bgAudio = document.getElementById('bg-music');
    
    bgAudio.muted = isMuted;
    
    // Kontrol audio intro jika masih aktif
    if (introMusic && isIntroAudioPlaying) {
        introMusic.muted = isMuted;
    }

    if(isMuted) {
        icon.className = 'fa-solid fa-volume-xmark';
    } else {
        icon.className = 'fa-solid fa-volume-high';
        bgAudio.play().catch(() => {});
        
        // Mainkan juga intro music jika masih di intro layer
        if (document.getElementById('intro-layer').style.display !== 'none' && introMusic && isIntroAudioPlaying) {
            introMusic.play().catch(() => {});
        }
    }
}

function masukWeb() {
    const introVid = document.getElementById('intro-vid');
    introVid.pause(); 
    
    // PERBAIKAN: Hentikan audio intro secara lebih agresif
    if (introMusic && isIntroAudioPlaying) {
        introMusic.pause();
        introMusic.currentTime = 0;
        introMusic.src = ''; // Kosongkan source untuk stop total
        introMusic.load(); // Reload untuk clear buffer
        isIntroAudioPlaying = false;
    }
    
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
        'ntt':    { in: 'anim-fog',      hov: 'hover-aurora', out: 'exit-ntt' }
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

function bukaModalTeksWebsite() {
    document.getElementById("modal-title").innerText = "ABOUT THIS WEBSITE";
    document.getElementById("modal-overlay").classList.add("show");
    document.body.classList.add('modal-accent');
    isModalOpen = true;
    
    // Gunakan accent warna kuning (sama seperti ABOUT US)
    const root = document.documentElement;
    root.style.setProperty('--theme-color', 'var(--accent-website)');
    root.style.setProperty('--hover-color', 'var(--accent-website)');
    document.body.classList.add('website-mode'); // Class baru
    document.body.classList.remove('about-mode');
    document.body.classList.remove('contact-mode');
    
    // Isi konten modal dengan teks
    const modal = document.getElementById("modal-content");
    modal.innerHTML = `
        <div class="website-description">
            <h3>Nusantara Indah</h3>
            <p><b>Nusantara Indah</b> adalah platform digital edukatif yang dirancang khusus untuk memperkenalkan kekayaan budaya dan sejarah berbagai daerah di Indonesia secara mendalam.</p>
            <p>Website ini mengusung identitas visual yang kuat melalui tipografi berwarna merah-putih, yang melambangkan keberanian, semangat juang, kesucian, serta harmoni antara raga dan jiwa manusia. Untuk menghadirkan pengalaman yang imersif, kami mengintegrasikan visualisasi autentik dari setiap daerah yang dipadukan dengan alunan instrumen musik khas setempat (lagu daerah) saat pengguna menjelajah.</p>
            <p>Secara estetika, Nusantara hadir dengan palet warna yang elegan, teduh di mata, serta dipermanis dengan sentuhan animasi halus agar tampilan terasa dinamis namun tetap profesional. Fokus utama kami terletak pada fungsionalitas dan aspek intuitif, memastikan struktur navigasi yang tertata rapi serta responsif di berbagai perangkat guna memberikan kenyamanan maksimal bagi setiap pengguna.</p>
        </div>
    `;
    
    // Pastikan modal body scrollable untuk konten panjang
    const modalBody = document.querySelector('.modal-body');
    if (modalBody) {
        // Reset semua gaya yang mungkin menghalangi scroll
        modalBody.style.overflow = '';
        modalBody.style.justifyContent = '';
        modalBody.style.alignItems = '';
        
        // Tambah kelas untuk styling khusus scroll
        modalBody.classList.add('scrollable');
        
        // Pastikan konten dimulai dari atas
        setTimeout(() => {
            modalBody.scrollTop = 0;
        }, 10);
    }
    
    ensureModalHeight();
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('show');
    document.body.classList.remove('modal-accent');
    document.body.classList.remove('about-mode');
    document.body.classList.remove('contact-mode');
    document.body.classList.remove('website-mode');
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

    document.getElementById('sidebar-list').querySelectorAll('li')[3].onclick = function() {
        bukaModalTeksWebsite();
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

