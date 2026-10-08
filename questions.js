const questions = [
    {
        question: "Apa komponen utama sistem komputer yang berfungsi mengeksekusi instruksi?",
        options: ["A. RAM", "B. CPU", "C. Harddisk", "D. Mainboard"],
        answer: 1,
        explanation: "CPU (Central Processing Unit) adalah otak komputer yang bertugas mengeksekusi instruksi."
    },
    {
        question: "Memori yang bersifat volatile adalah...",
        options: ["A. ROM", "B. Harddisk", "C. RAM", "D. SSD"],
        answer: 2,
        explanation: "RAM bersifat volatile, artinya data hilang saat daya listrik dimatikan."
    },
    {
        question: "Perangkat yang digunakan untuk menyimpan data secara permanen disebut...",
        options: ["A. Secondary Storage", "B. Primary Memory", "C. Cache", "D. Register"],
        answer: 0,
        explanation: "Secondary storage (seperti HDD/SSD) menyimpan data secara non-volatile/permanen."
    },
    {
        question: "Register yang menyimpan alamat memori dari instruksi selanjutnya yang akan dieksekusi adalah...",
        options: ["A. Instruction Register (IR)", "B. Memory Address Register (MAR)", "C. Program Counter (PC)", "D. Accumulator"],
        answer: 2,
        explanation: "Program Counter (PC) menyimpan alamat instruksi berikutnya yang akan dieksekusi."
    },
    {
        question: "Sinyal yang dikirimkan oleh perangkat keras ke CPU untuk meminta perhatian dinamakan...",
        options: ["A. System Call", "B. Interrupt", "C. Trap", "D. Semaphore"],
        answer: 1,
        explanation: "Interrupt adalah sinyal dari hardware/software yang meminta perhatian CPU segera."
    },
    {
        question: "Fungsi utama dari sistem operasi adalah sebagai berikut, KECUALI...",
        options: ["A. Pengelola sumber daya", "B. Antarmuka pengguna", "C. Pengedit foto profesional", "D. Pengendali perangkat I/O"],
        answer: 2,
        explanation: "Pengedit foto adalah aplikasi pengguna, bukan fungsi dari Sistem Operasi."
    },
    {
        question: "Program yang selalu berjalan di latar belakang selama komputer menyala disebut...",
        options: ["A. Kernel", "B. Application", "C. Utility", "D. Compiler"],
        answer: 0,
        explanation: "Kernel adalah inti dari sistem operasi yang selalu aktif berjalan di memori."
    },
    {
        question: "Modus operasi pada CPU yang membatasi akses instruksi berbahaya demi keamanan sistem disebut...",
        options: ["A. User Mode", "B. Kernel Mode", "C. System Mode", "D. Admin Mode"],
        answer: 0,
        explanation: "User Mode membatasi akses eksekusi instruksi tertentu untuk melindungi sistem."
    },
    {
        question: "Mekanisme yang digunakan aplikasi untuk meminta layanan dari kernel sistem operasi adalah...",
        options: ["A. Interrupt Request", "B. System Call", "C. Direct Memory Access", "D. Context Switch"],
        answer: 1,
        explanation: "System Call merupakan jembatan/antarmuka antara program aplikasi dan kernel SO."
    },
    {
        question: "Sistem operasi yang memungkinkan banyak pengguna menjalankan program bersamaan disebut...",
        options: ["A. Single-user System", "B. Multi-user System", "C. Real-time System", "D. Embedded System"],
        answer: 1,
        explanation: "Multi-user System mendukung penggunaan komputer oleh lebih dari satu user secara simultan."
    },
    {
        question: "Komponen SO yang bertugas mengatur alokasi memori utama untuk setiap proses adalah...",
        options: ["A. File Manager", "B. Process Manager", "C. Memory Manager", "D. Device Manager"],
        answer: 2,
        explanation: "Memory Manager mengelola alokasi dan dealokasi memori utama (RAM)."
    },
    {
        question: "Manajemen file dalam Sistem Operasi bertanggung jawab untuk...",
        options: ["A. Mengatur jadwal eksekusi CPU", "B. Menyediakan struktur direktori dan manipulasi berkas", "C. Mengatur sinyal interrupt", "D. Mengalokasikan daya listrik"],
        answer: 1,
        explanation: "Manajemen file mengelola pembuatan, penghapusan, penyimpan, dan direktori file."
    },
    {
        question: "Struktur hierarki tempat menyimpan file disebut...",
        options: ["A. Blok", "B. Sektor", "C. Direktori", "D. Buffer"],
        answer: 2,
        explanation: "Direktori (folder) digunakan untuk mengorganisir file dalam bentuk hierarki."
    },
    {
        question: "Metode akses file yang membaca data secara berurutan dari awal hingga akhir adalah...",
        options: ["A. Direct Access", "B. Sequential Access", "C. Random Access", "D. Indexed Access"],
        answer: 1,
        explanation: "Sequential Access mengakses record secara berurutan satu per satu."
    },
    {
        question: "Atribut file yang menentukan siapa saja yang boleh membaca/menulis file disebut...",
        options: ["A. File Name", "B. File Type", "C. File Permissions/Protection", "D. File Identifier"],
        answer: 2,
        explanation: "File permissions menentukan hak akses (read, write, execute) dari suatu file."
    },
    {
        question: "Program yang sedang dieksekusi di memori dinamakan...",
        options: ["A. Thread", "B. Berkas", "C. Proses", "D. Instruksi"],
        answer: 2,
        explanation: "Proses adalah definisi untuk program yang sedang berada dalam tahap eksekusi."
    },
    {
        question: "Status proses ketika sedang menunggu alokasi waktu CPU disebut...",
        options: ["A. Running", "B. Ready", "C. Waiting/Blocked", "D. Terminated"],
        answer: 1,
        explanation: "Status 'Ready' berarti proses siap dieksekusi dan sedang menunggu giliran penggunaan CPU."
    },
    {
        question: "Status proses ketika sedang menunggu kejadian (misal I/O selesai) adalah...",
        options: ["A. Running", "B. Ready", "C. Waiting", "D. New"],
        answer: 2,
        explanation: "Status 'Waiting' terjadi saat proses berhenti sementara menunggu event tertentu seperti I/O."
    },
    {
        question: "Struktur data kernel yang menyimpan seluruh informasi mengenai suatu proses dinamakan...",
        options: ["A. Process Control Block (PCB)", "B. File Control Block (FCB)", "C. Memory Map Table", "D. Interrupt Vector Table"],
        answer: 0,
        explanation: "PCB menyimpan semua data detail terkait proses (state, PID, register, dll)."
    },
    {
        question: "Tindakan menyimpang status proses yang sedang berjalan dan memuat status proses baru ke CPU disebut...",
        options: ["A. Swapping", "B. Context Switching", "C. Paging", "D. Scheduling"],
        answer: 1,
        explanation: "Context Switching adalah proses peralihan eksekusi CPU dari satu proses ke proses lain."
    },
    {
        question: "Algoritma penjadwalan CPU yang mendahulukan proses yang pertama kali tiba adalah...",
        options: ["A. SJF", "B. FCFS", "C. Round Robin", "D. Priority Scheduling"],
        answer: 1,
        explanation: "FCFS (First-Come, First-Served) melayani proses berdasarkan urutan kedatangan."
    },
    {
        question: "Algoritma penjadwalan yang mengalokasikan waktu CPU berdasarkan 'Time Quantum' secara bergantian adalah...",
        options: ["A. Priority Scheduling", "B. Round Robin (RR)", "C. SJF Non-Preemptive", "D. FCFS"],
        answer: 1,
        explanation: "Round Robin menggunakan batasan waktu eksekusi yang dinamakan Time Quantum."
    },
    {
        question: "Algoritma penjadwalan yang mengeksekusi proses dengan estimasi waktu eksekusi terpendek terlebih dahulu adalah...",
        options: ["A. Shortest Job First (SJF)", "B. FCFS", "C. Multilevel Queue", "D. Round Robin"],
        answer: 0,
        explanation: "SJF memilih proses dengan durasi burst time paling singkat untuk dieksekusi lebih dulu."
    },
    {
        question: "Kondisi di mana proses dengan prioritas rendah tidak pernah dieksekusi karena ada proses berprioritas tinggi terus-menerus disebut...",
        options: ["A. Deadlock", "B. Aging", "C. Starvation", "D. Thrashing"],
        answer: 2,
        explanation: "Starvation terjadi saat proses bernilai prioritas rendah terus diabaikan."
    },
    {
        question: "Solusi untuk mengatasi masalah Starvation pada algoritma prioritas adalah...",
        options: ["A. Context Switch", "B. Aging", "C. Swapping", "D. Spooling"],
        answer: 1,
        explanation: "Aging bertahap menaikkan prioritas proses yang sudah lama menunggu di queue."
    },
    {
        question: "Unit terkecil dari penggunaan CPU yang berbagi ruang alamat memori dengan thread lain dalam proses yang sama disebut...",
        options: ["A. Kernel", "B. Process", "C. Thread", "D. Task"],
        answer: 2,
        explanation: "Thread adalah unit dasar dari pemanfaatan CPU dalam satu proses (lightweight process)."
    },
    {
        question: "Keuntungan utama dari pengaplikasian Multithreading adalah...",
        options: ["A. Mempercepat kapasitas harddisk", "B. Meningkatkan responsivitas aplikasi", "C. Mencegah malware", "D. Mengurangi penggunaan memori virtual"],
        answer: 1,
        explanation: "Multithreading menjaga aplikasi tetap responsif meskipun ada bagian yang sedang menunggu operasi."
    },
    {
        question: "Peristiwa di mana dua atau lebih proses saling menunggu sumber daya dan tidak ada yang bisa melanjutkan eksekusi dinamakan...",
        options: ["A. Race Condition", "B. Deadlock", "C. Starvation", "D. Trap"],
        answer: 1,
        explanation: "Deadlock adalah situasi di mana proses saling mengunci sumber daya secara permanen."
    },
    {
        question: "Berikut adalah syarat mutlak terjadinya Deadlock, KECUALI...",
        options: ["A. Mutual Exclusion", "B. Hold and Wait", "C. Preemption Allowed", "D. Circular Wait"],
        answer: 2,
        explanation: "Syarat deadlock adalah 'No Preemption'. Jika Preemption diperbolehkan, deadlock tidak terjadi."
    },
    {
        question: "Teknik pengalokasian memori virtual dengan membagi memori menjadi blok-blok berukuran tetap dinamakan...",
        options: ["A. Segmentation", "B. Paging", "C. Partitioning", "D. Fragmenting"],
        answer: 1,
        explanation: "Paging membagi memori fisik dan logika menjadi blok ukuran tetap (pages & frames)."
    },
    {
        question: "Ruang penyimpanan di harddisk yang digunakan seolah-olah sebagai RAM tambahan disebut...",
        options: ["A. Cache Memory", "B. Virtual Memory", "C. ROM", "D. Buffer"],
        answer: 1,
        explanation: "Virtual Memory memanfaatkan penyimpanan sekunder sebagai ekstensi RAM."
    },
    {
        question: "Fragmentasi eksternal terjadi pada sistem pengelolaan memori apabila...",
        options: ["A. Ukuran page terlalu kecil", "B. Terdapat sisa ruang kosong di dalam blok yang teralokasi", "C. Terdapat cukup total ruang kosong tetapi tidak berurutan secara kontigu", "D. RAM mengalami kerusakan fisik"],
        answer: 2,
        explanation: "Fragmentasi eksternal terjadi saat total memori cukup tetapi lokasinya terpisah-pisah."
    },
    {
        question: "Page Fault terjadi ketika...",
        options: ["A. Terjadi kerusakan harddisk", "B. Halaman memori yang diminta tidak sedang berada di RAM", "C. CPU berhenti bekerja", "D. Terjadi pembagian dengan angka nol"],
        answer: 1,
        explanation: "Page Fault dipicu saat program mengakses halaman yang belum dimuat ke RAM fisik."
    },
    {
        question: "Algoritma penggantian page yang mengganti halaman yang paling lama tidak digunakan adalah...",
        options: ["A. FIFO", "B. Optimal", "C. LRU (Least Recently Used)", "D. LFU"],
        answer: 2,
        explanation: "LRU memilih halaman yang sudah paling lama tidak diakses untuk digantikan."
    },
    {
        question: "Komponen SO yang menjadi jembatan/penerjemah antara Sistem Operasi dan perangkat keras tertentu adalah...",
        options: ["A. Firmware", "B. Device Driver", "C. Compiler", "D. Shell"],
        answer: 1,
        explanation: "Device Driver memberikan antarmuka standar bagi SO untuk berkomunikasi dengan hardware khusus."
    },
    {
        question: "Teknik I/O di mana CPU secara terus-menerus mengecek status perangkat keras dinamakan...",
        options: ["A. Interrupt-driven I/O", "B. Programmed I/O (Polling)", "C. Direct Memory Access (DMA)", "D. Spooling"],
        answer: 1,
        explanation: "Programmed I/O / Polling melibatkan CPU yang terus mengecek flag status perangkat I/O."
    },
    {
        question: "Fitur hardware yang memungkinkan perangkat I/O mentransfer data langsung ke RAM tanpa keterlibatan penuh CPU adalah...",
        options: ["A. Bus", "B. Register", "C. DMA (Direct Memory Access)", "D. Cache"],
        answer: 2,
        explanation: "DMA membebaskan CPU dari beban transfer data besar antara perangkat I/O dan RAM."
    },
    {
        question: "Format penyusunan/struktur partisi disk kuno yang memiliki batas maksimal 4 partisi primer adalah...",
        options: ["A. GPT", "B. MBR", "C. NTFS", "D. FAT32"],
        answer: 1,
        explanation: "MBR (Master Boot Record) dibatasi maksimal 4 partisi primer."
    },
    {
        question: "Antarmuka berbasis teks tempat pengguna mengetikkan perintah untuk SO dinamakan...",
        options: ["A. GUI", "B. CLI (Command Line Interface)", "C. Touchscreen", "D. API"],
        answer: 1,
        explanation: "CLI menerima masukan berbasis teks (contoh: Terminal/Command Prompt)."
    },
    {
        question: "Prosedur awal pemuatan Sistem Operasi saat komputer pertama kali dinyalakan disebut...",
        options: ["A. Formatting", "B. Booting", "C. Multitasking", "D. Partitioning"],
        answer: 1,
        explanation: "Booting adalah proses startup komputer hingga SO siap digunakan."
    },
    {
        question: "Program kecil yang disimpan di ROM untuk melakukan tes awal hardware saat booting adalah...",
        options: ["A. Kernel", "B. BIOS / UEFI", "C. Driver", "D. Shell"],
        answer: 1,
        explanation: "BIOS/UEFI bertugas menginisialisasi hardware dan memuat bootloader."
    },
    {
        question: "Proses membagi ruang harddisk menjadi beberapa area logis terpisah dinamakan...",
        options: ["A. Defragmentasi", "B. Partisi", "C. Formatting", "D. Mounting"],
        answer: 1,
        explanation: "Partisi membagi drive fisik menjadi beberapa bagian/drive logis."
    },
    {
        question: "Kondisi ketika CPU menghabiskan lebih banyak waktu untuk swap-in dan swap-out page daripada mengeksekusi instruksi disebut...",
        options: ["A. Deadlock", "B. Thrashing", "C. Starvation", "D. Fragmentasi"],
        answer: 1,
        explanation: "Thrashing terjadi saat SO terlalu sibuk melakukan paging/swapping secara berlebihan."
    },
    {
        question: "Pendekatan dalam pembuatan kernel di mana hanya fungsi inti yang ada di kernel, sedangkan fungsi lain berjalan di user space disebut...",
        options: ["A. Monolithic Kernel", "B. Microkernel", "C. Hybrid Kernel", "D. Exo Kernel"],
        answer: 1,
        explanation: "Microkernel meminimalkan struktur kernel dan menjalankan modul lain di ruang pengguna."
    },
    {
        question: "Variabel terproteksi yang digunakan untuk memecahkan masalah sinkronisasi dan race condition dinamakan...",
        options: ["A. Mutex / Semaphore", "B. Flag", "C. Pointer", "D. Vector"],
        answer: 0,
        explanation: "Semaphore/Mutex digunakan untuk mengontrol akses bersama ke sumber daya kritis."
    },
    {
        question: "Sistem berkas default yang umum digunakan oleh sistem operasi modern Windows adalah...",
        options: ["A. EXT4", "B. FAT32", "C. NTFS", "D. APFS"],
        answer: 2,
        explanation: "NTFS adalah sistem berkas standar utama pada Windows modern."
    },
    {
        question: "Sistem berkas yang umum digunakan secara default pada distro Linux modern adalah...",
        options: ["A. NTFS", "B. FAT32", "C. EXT4", "D. HFS+"],
        answer: 2,
        explanation: "EXT4 merupakan sistem berkas paling populer dan default untuk Linux."
    },
    {
        question: "Perubahan status dari Running menjadi Ready pada proses biasanya disebabkan oleh...",
        options: ["A. Meminta I/O", "B. Waktu quantum CPU habis (Interrupt)", "C. Proses selesai", "D. Kekurangan memori"],
        answer: 1,
        explanation: "Pada algoritma preemptive/Round Robin, jika waktu quantum habis, status kembali ke Ready."
    },
    {
        question: "Sistem operasi real-time (RTOS) umumnya digunakan pada...",
        options: ["A. Komputer Kantoran", "B. Sistem Kendali Pesawat & Perangkat Medis", "C. Server Web", "D. PC Gaming"],
        answer: 1,
        explanation: "RTOS menjamin pemrosesan data tepat waktu secara kaku (kritis) seperti pada kontrol pesawat."
    },
    {
        question: "Antarmuka grafis yang memungkinkan interaksi pengguna melalui elemen seperti ikon dan jendela dinamakan...",
        options: ["A. CLI", "B. GUI (Graphical User Interface)", "C. API", "D. POSIX"],
        answer: 1,
        explanation: "GUI memfasilitasi pengguna berinteraksi menggunakan visual seperti ikon dan menu."
    }
];
