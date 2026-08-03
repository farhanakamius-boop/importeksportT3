// ==========================================================================
// COURSE DATA & 6 MINI GAMES SUITE (FLAT SINGLE SCRIPT)
// ==========================================================================

/* ==========================================================================
   TOPIK 3: PROSEDUR IMPORT DAN EKSPORT - KOLEJ KOMUNITI PAPAR
   Structured Course Content, Activities & Assessment Data (100% Offline)
   ========================================================================== */

const COURSE_DATA = {
  courseCode: "SLK30203",
  courseName: "Pengurusan Import dan Eksport",
  topicTitle: "Topik 3.0: Prosedur Import & Eksport",
  institution: "Kolej Komuniti Papar",
  targetAudience: "Pelajar Sijil (Semester 3 / Tahun 2)",
  clos: [
    { id: "CLO1", code: "C3, PLO2", desc: "Menghubungkait konsep import dan eksport, INCOTERMS dan pelbagai strategi pembiayaan." },
    { id: "CLO2", code: "P3, PLO3", desc: "Mengaplikasi kemahiran penggunaan dokumen dan prosedur yang betul bagi aktiviti import dan eksport." },
    { id: "CLO3", code: "A2, PLO8", desc: "Menerangkan penglibatan dan peranan agensi yang terlibat bagi aktiviti import dan eksport." }
  ],
  
  // Subtopic 3.1: Menunjukkan Proses Import dan Eksport
  subtopic31: {
    title: "3.1 Menunjukkan Proses Import dan Eksport",
    subtitle: "Rantaian Perdagangan Antarabangsa Terbahagi Kepada 4 Fasa Utama",
    phases: [
      {
        phase: "Fasa 1",
        title: "Kontrak & Terma",
        icon: "📝",
        items: [
          "Penyediaan perjanjian jualan / kontrak antarabangsa.",
          "Rundingan & persetujuan terma INCOTERMS (misalnya FOB, CIF).",
          "Mendapatkan sebut harga perkapalan dan penyediaan Proforma Invoice."
        ]
      },
      {
        phase: "Fasa 2",
        title: "Logistik & Insurans",
        icon: "📦",
        items: [
          "Pembungkusan kargo mengikut standard antarabangsa (packing & marking).",
          "Tempahan ruang kapal / kargo udara bersama Freight Forwarder.",
          "Penyediaan perlindungan insurans transit kargo."
        ]
      },
      {
        phase: "Fasa 3",
        title: "Pelepasan Kastam",
        icon: "🛃",
        items: [
          "Pemeriksaan dokumen & pengisytiharan Borang Kastam (K1 Import / K2 Eksport).",
          "Pengklasifikasian produk menggunakan Kod Harmonized System (HS Code).",
          "Penilaian cukai & duti oleh Jabatan Kastam Diraja Malaysia (JKDM)."
        ]
      },
      {
        phase: "Fasa 4",
        title: "Penyerahan & Bayaran",
        icon: "💳",
        items: [
          "Penghantaran dokumen perkapalan kepada bank pengimport / bank penasihat.",
          "Pelepasan kargo di pelabuhan destinasi.",
          "Penerimaan bayaran akhir urus niaga (di bawah syarat L/C atau kaedah lain)."
        ]
      }
    ],
    entities: [
      {
        id: "exporter",
        name: "Pengeksport (Exporter / Penjual)",
        icon: "🏭",
        role: "Menyediakan barangan, membungkus, mengisytiharkan Borang K2 kepada Kastam, menempah pengangkutan, dan menyerahkan dokumen ke bank untuk tuntutan bayaran."
      },
      {
        id: "importer",
        name: "Pengimport (Importer / Pembeli)",
        icon: "🏬",
        role: "Memohon Surat Kredit (L/C) di bank pembuka, memohon permit import (AP) jika perlu, membuat pengisytiharan Borang K1, membayar cukai/duti, dan tuntut barangan di pelabuhan."
      },
      {
        id: "carrier",
        name: "Syarikat Pengangkutan (Carrier / Forwarder)",
        icon: "🚢",
        role: "Mengangkut kargo secara fizikal via laut atau udara, serta mengeluarkan dokumen Bil Muatan (Bill of Lading - B/L) atau Bil Muatan Udara (Air Waybill - AWB)."
      },
      {
        id: "banks",
        name: "Bank (Issuing Bank & Advising Bank)",
        icon: "🏦",
        role: "Issuing Bank membuka L/C untuk pengimport; Advising Bank menyampaikan L/C kepada pengeksport dan memproses pembayaran dokumen perkapalan."
      },
      {
        id: "customs",
        name: "Jabatan Kastam Diraja Malaysia (JKDM)",
        icon: "👮‍♂️",
        role: "Mengawal sempadan negara, menyemak deklarasi Borang K1/K2 via DagangNet, mengesahkan Kod HS, mengira duti cukai ad valorem, dan menjalankan pemeriksaan fizikal kargo."
      }
    ]
  },

  // Subtopic 3.2: Mengaplikasikan Langkah-Langkah Aktiviti Import dan Eksport
  subtopic32: {
    title: "3.2 Mengaplikasikan Langkah-Langkah dalam Aktiviti Import dan Eksport",
    exportSteps: [
      { num: 1, title: "Pertanyaan & Sebut Harga (Enquiry & Quotation)", desc: "Menerima pertanyaan daripada pengimport dan menyediakan sebut harga rasmi (Proforma Invoice) menyatakan harga, spesifikasi, dan INCOTERMS." },
      { num: 2, title: "Kontrak Jualan (Sales Contract)", desc: "Memeterai kontrak bertulis yang mengandungi kuantiti, harga, tarikh penghantaran, insurans, dan kaedah bayaran (L/C)." },
      { num: 3, title: "Penerimaan Terma Pembayaran (L/C Advice)", desc: "Menerima makluman L/C daripada Advising Bank dan menyemak syarat-syaratnya untuk elak percanggahan dokumen." },
      { num: 4, title: "Penyediaan Barangan & Pembungkusan", desc: "Menjalankan proses pengeluaran, pembungkusan (packing), dan penandaan (marking) mengikut standard antarabangsa." },
      { num: 5, title: "Tempahan Ruang Penghantaran (Booking Vessel)", desc: "Menghubungi Freight Forwarder untuk menempah kontena / ruang kapal / kargo udara." },
      { num: 6, title: "Pelepasan Kastam Eksport (Borang K2)", desc: "Mengisi dan mengemukakan deklarasi Borang Kastam No. 2 (K2) melalui ejen kastam sekurang-kurangnya 24 jam sebelum pemuatan." },
      { num: 7, title: "Pemuatan & Penghantaran (Loading & Shipment)", desc: "Kargo dimuatkan ke atas kapal/pesawat. Syarikat pengangkutan mengeluarkan Bil Muatan (B/L) atau Air Waybill (AWB)." },
      { num: 8, title: "Penyerahan Dokumen ke Bank (Presentation)", desc: "Membawa dokumen operasi & kewangan ke bank untuk proses tuntutan bayaran di bawah L/C." }
    ],
    importSteps: [
      { num: 1, title: "Pemilihan Pembekal & Kajian Pasaran", desc: "Mengenal pasti pengeluar antarabangsa dan menganalisis kualiti, kos, serta keandalan pembekal." },
      { num: 2, title: "Permohonan Surat Kredit (L/C Application)", desc: "Pengimport memohon kepada Issuing Bank untuk membuka L/C bagi menjamin pembayaran kepada penjual." },
      { num: 3, title: "Pemantauan Transit & Insurans", desc: "Memastikan barangan dilindungi polisi insurans yang betul (seperti terma CIF) sepanjang transit." },
      { num: 4, title: "Penyediaan Dokumen Ketibaan", desc: "Menerima dokumen perkapalan (B/L, Invois, Packing List, COO) daripada bank pengimport." },
      { num: 5, title: "Deklarasi Kastam Import (Borang K1)", desc: "Mengemukakan Borang Kastam No. 1 (K1) secara elektronik menerusi sistem DagangNet (EDI)." },
      { num: 6, title: "Penilaian & Pembayaran Cukai Kastam", desc: "Membuat bayaran cukai import, SST, atau duti eksais berdasarkan pengiraan nilai kastam." },
      { num: 7, title: "Pemeriksaan Fizikal & Pelepasan", desc: "JKDM atau agensi kuarantin (MAQIS) melakukan pemeriksaan fizikal jika perlu sebelum barangan dilepaskan." },
      { num: 8, title: "Pengangkutan Tempatan & Penghantaran Akhir", desc: "Menghantar barangan dari pelabuhan ke gudang menggunakan syarikat haulage tempatan." }
    ]
  },

  // Subtopic 3.3: Meneliti Dokumen yang Terlibat
  subtopic33: {
    title: "3.3 Meneliti Dokumen yang Terlibat dalam Aktiviti Import dan Eksport",
    quote: '"Barangan tidak akan bergerak tanpa dokumen yang betul."',
    operationalDocs: [
      {
        name: "Invois Komersial (Commercial Invoice)",
        issuer: "Pengeksport (Penjual)",
        function: "Dokumen asas jualan menyenaraikan butiran barangan, kuantiti, harga seunit, jumlah nilai, serta nama pembeli dan penjual. Digunakan kastam untuk menilai cukai.",
        type: "Operasi"
      },
      {
        name: "Senarai Pembungkusan (Packing List)",
        issuer: "Pengeksport (Penjual)",
        function: "Menunjukkan pecahan bungkusan, berat bersih, berat kasar, dan dimensi setiap karton/peti. Penting untuk pemeriksaan fizikal kastam.",
        type: "Operasi"
      },
      {
        name: "Bil Muatan (Bill of Lading - B/L)",
        issuer: "Syarikat Perkapalan (Carrier)",
        function: "Resit kargo laut, bukti kontrak pengangkutan, dan DOKUMEN HAK MILIK (Document of Title). Barangan hanya boleh dituntut jika memegang B/L asal.",
        type: "Operasi (Hak Milik)",
        highlight: true
      },
      {
        name: "Bil Muatan Udara (Air Waybill - AWB)",
        issuer: "Syarikat Penerbangan",
        function: "Resit pengangkutan udara. BUKAN merupakan dokumen hak milik.",
        type: "Operasi"
      },
      {
        name: "Sijil Asal Usul (Certificate of Origin - COO)",
        issuer: "Dewan Perniagaan / MITI",
        function: "Mengesahkan negara pengeluaran kargo bagi membolehkan pengimport menuntut tarif keutamaan di bawah Perjanjian Perdagangan Bebas (FTA).",
        type: "Operasi"
      },
      {
        name: "Nota Perkapalan (Shipping Instructions)",
        issuer: "Pengeksport",
        function: "Arahan bertulis daripada pengeksport kepada ejen perkapalan mengenai spesifikasi kargo dan pelabuhan tujuan.",
        type: "Operasi"
      }
    ],
    financialDocs: [
      {
        name: "Surat Kredit (Letter of Credit - L/C)",
        issuer: "Bank Pengimport (Issuing Bank)",
        function: "Jaminan bertulis bank kepada pengeksport bahawa bayaran akan dibuat apabila semua dokumen dikemukakan dengan lengkap dan betul. Merapatkan masalah 'lack of trust'.",
        type: "Kewangan"
      },
      {
        name: "Bil Pertukaran / Draft (Bill of Exchange)",
        issuer: "Pengeksport (Penarik)",
        function: "Arahan bertulis mengarahkan pengimport (tertarik) membayar jumlah tertentu pada tarikh yang ditetapkan.",
        type: "Kewangan"
      },
      {
        name: "Polisi Insurans (Insurance Policy)",
        issuer: "Syarikat Insurans",
        function: "Membuktikan barangan dilindungi daripada risiko kerosakan, kecurian, atau kehilangan semasa transit antarabangsa.",
        type: "Kewangan"
      },
      {
        name: "Resit Amanah (Trust Receipt - T/R)",
        issuer: "Bank Pengimport",
        function: "Kemudahan kredit jangka pendek membolehkan pengimport mengambil barangan dari pelabuhan sebelum membayar bank (dipegang atas amanah).",
        type: "Kewangan"
      },
      {
        name: "Shipping Guarantee (Jaminan Penghantaran)",
        issuer: "Bank Pengimport",
        function: "Surat jaminan bank membolehkan pengimport menuntut barangan daripada syarikat perkapalan apabila kargo tiba tetapi B/L asal belum sampai.",
        type: "Kewangan",
        highlight: true
      }
    ]
  },

  // Subtopic 3.4: Panduan dan Prosedur Kastam (JKDM)
  subtopic34: {
    title: "3.4 Mengaitkan Panduan dan Prosedur Kastam dalam Aktiviti Import dan Eksport",
    customsAgency: "Jabatan Kastam Diraja Malaysia (JKDM)",
    aspects: [
      {
        title: "1. Klasifikasi Barangan (Kod HS / Harmonized System)",
        desc: "Setiap barangan wajib diklasifikasikan menggunakan Kod HS 6-digit antarabangsa (ditambah digit tempatan 10-digit di Malaysia). Klasifikasi yang salah boleh menyebabkan kelewatan, denda, atau tuduhan mengelak cukai."
      },
      {
        title: "2. Penilaian Kastam (Customs Valuation)",
        desc: "Kastam menilai nilai barangan berdasarkan kaedah WTO (Nilai Transaksi / Transaction Value) untuk mengira duti cukai ad valorem (peratusan daripada nilai barangan)."
      },
      {
        title: "3. Borang Deklarasi Kastam (Borang K1 & Borang K2)",
        desc: "• Borang K1 (Deklarasi Import): Mengisytiharkan barangan yang dibawa masuk ke dalam negara bagi penentuan cukai import & SST.\n• Borang K2 (Deklarasi Eksport): Mengisytiharkan barangan yang akan dihantar keluar dari Malaysia (wajib diserahkan sebelum muatan berlepas)."
      },
      {
        title: "4. Sekatan & Permit Agensi Kerajaan Lain (OGA / PIA)",
        desc: "• MAQIS: Permit Kuarantin Makanan & Tumbuhan.\n• KKM (Kementerian Kesihatan): Kelulusan Bahan Kimia & Peranti Perubatan.\n• MTIB (Lembaga Perindustrian Kayu): Permit Barangan Kayu & Perabot.\n• SIRIM: Kelulusan Barangan Elektrik & Elektronik."
      }
    ]
  },

  // 6 Easy, Low-Preparation Classroom Mini Games for Topic 3
  miniGames: {
    // Game 1: Import or Export?
    importExport: {
      title: "1. Import atau Eksport?",
      objective: "Mengecam dan mengelaskan urus niaga perdagangan antarabangsa kepada IMPORT atau EKSPORT.",
      instructions: "Pensyarah membacakan situasi. Pelajar bergerak ke tanda 'IMPORT' atau 'EKSPORT' dan menerangkan alasannya.",
      scenarios: [
        { id: 1, situation: "Malaysia membeli buah epal segar dari New Zealand.", answer: "IMPORT", explanation: "Malaysia membawa masuk barangan buatan luar negara (New Zealand) ke dalam negara." },
        { id: 2, situation: "Syarikat di Selangor menjual sarung tangan getah kepada hospital di Amerika Syarikat.", answer: "EKSPORT", explanation: "Barangan tempatan dihantar keluar dari Malaysia ke pasaran luar negara." },
        { id: 3, situation: "Kilang di Ipoh membeli mesin pemprosesan berteknologi tinggi dari Jerman.", answer: "IMPORT", explanation: "Pembelian jentera dari negara luar (Jerman) masuk ke Malaysia." },
        { id: 4, situation: "Pengeluar perabot kayu di Johor menghantar kontena perabot ke United Kingdom.", answer: "EKSPORT", explanation: "Penjualan barangan siap Malaysia ke pasaran antarabangsa." },
        { id: 5, situation: "Pasar raya di Sabah membawa masuk stok minyak zaitun dari Itali.", answer: "IMPORT", explanation: "Kemasukan produk makanan luar negara ke dalam pasaran tempatan." },
        { id: 6, situation: "Syarikat minyak sawit tempatan menjual minyak sawit mentah ke India.", answer: "EKSPORT", explanation: "Penghantaran komoditi utama Malaysia ke luar negara." }
      ]
    },

    // Game 2: Document Match-Up
    documentMatch: {
      title: "2. Document Match-Up",
      objective: "Padankan nama dokumen perdagangan dengan fungsi tepatnya secepat mungkin.",
      instructions: "Kumpulan berlumba memadankan kad dokumen dengan kad fungsi. Kumpulan pertama yang tepat menjerit 'Clearance complete!'",
      pairs: [
        { id: "d1", docName: "Invois Komersial (Commercial Invoice)", functionDesc: "Menunjukkan nilai jualan, kuantiti, spesifikasi barangan & butiran transaksi untuk penilaian cukai kastam." },
        { id: "d2", docName: "Bil Muatan (Bill of Lading - B/L)", functionDesc: "Dokumen HAK MILIK (Document of Title) kargo laut, resit penerimaan kargo & bukti kontrak perkapalan." },
        { id: "d3", docName: "Borang Kastam No. 1 (Borang K1)", functionDesc: "Borang pengisytiharan bagi membawa masuk barangan IMPORT ke dalam Malaysia melalui DagangNet." },
        { id: "d4", docName: "Surat Kredit (Letter of Credit - L/C)", functionDesc: "Jaminan bertulis bank pembeli membuat pembayaran kepada penjual apabila dokumen diserahkan lengkap." },
        { id: "d5", docName: "Sijil Asal Usul (Certificate of Origin - COO)", functionDesc: "Mengesahkan negara pengeluaran kargo bagi menuntut tarif keutamaan di bawah Perjanjian Perdagangan Bebas (FTA)." },
        { id: "d6", docName: "Senarai Pembungkusan (Packing List)", functionDesc: "Menunjukkan pecahan bungkusan, berat bersih, berat kasar, dan dimensi karton untuk pemeriksaan fizikal." }
      ]
    },

    // Game 3: Human Procedure Line
    procedureLine: {
      title: "3. Human Procedure Line",
      objective: "Susun 6 langkah utama prosedur import/eksport mengikut kronologi yang betul.",
      instructions: "Pelajar memegang kad langkah dan menyusun diri mengikut urutan prosedur dari awal hingga akhir.",
      steps: [
        { stepNum: 1, title: "Semak Syarat & Permit", desc: "Mengenal pasti sekatan, kod HS & permohonan permit Agensi OGA (MAQIS/SIRIM/MTIB)." },
        { stepNum: 2, title: "Sediakan Dokumen", desc: "Penyediaan Invois Komersial, Packing List, Sales Contract & permohonan L/C." },
        { stepNum: 3, title: "Tempah Pengangkutan", desc: "Menghubungi Freight Forwarder untuk tempahan kontena kapal (B/L) atau kargo udara (AWB)." },
        { stepNum: 4, title: "Deklarasi Kastam", desc: "Mengisytiharkan Borang Kastam No. 1 (Import) atau Borang Kastam No. 2 (Eksport) via DagangNet." },
        { stepNum: 5, title: "Bayar Cukai & Duti", desc: "Melakukan penilaian dan pembayaran cukai import, SST atau duti eksais kepada JKDM." },
        { stepNum: 6, title: "Terima / Hantar Barangan", desc: "Pemeriksaan fizikal, pelepasan pelabuhan & pengangkutan ke gudang menggunakan haulage." }
      ]
    },

    // Game 4: Customs Officer Says
    customsSays: {
      title: "4. Customs Officer Says",
      objective: "Uji kepatuhan dan reaksi pantas terhadap arahan pegawai kastam menggunakan perbendaharaan kata topik.",
      instructions: "Jika arahan bermula dengan 'Customs officer says...', angkat dokumen berkenaan. Jika tiada, JANGAN BERGERAK!",
      vocabulary: ["Permit", "Packing List", "Bill of Lading", "Declaration (Borang K1/K2)", "Commercial Invoice", "Certificate of Origin"],
      commands: [
        { text: "Customs officer says, show your Commercial Invoice!", isTrick: false, action: "Angkat Invois Komersial" },
        { text: "Show your Bill of Lading!", isTrick: true, action: "JANGAN BERGERAK! (Tiada kata kunci)" },
        { text: "Customs officer says, present your Import Permit (AP)!", isTrick: false, action: "Angkat Permit Import" },
        { text: "Submit Borang K1 declaration now!", isTrick: true, action: "JANGAN BERGERAK! (Tiada kata kunci)" },
        { text: "Customs officer says, show your Packing List!", isTrick: false, action: "Angkat Packing List" },
        { text: "Customs officer says, produce the Certificate of Origin (COO)!", isTrick: false, action: "Angkat Sijil Asal Usul" }
      ]
    },

    // Game 5: Find the Missing Document
    missingDoc: {
      title: "5. Find the Missing Document",
      objective: "Analisis senario pengapalan dan kenal pasti 1 dokumen penting yang sengaja dikeluarkan.",
      scenarios: [
        {
          id: "m1",
          shipmentTitle: "Senario 1: Kargo Kontena di Pelabuhan Klang (Eksport)",
          presentDocs: ["Invois Komersial", "Borang K2 (Eksport)", "Bill of Lading (B/L)"],
          missingDocName: "Senarai Pembungkusan (Packing List)",
          explanation: "Tanpa Packing List, Pegawai Kastam tidak dapat menyemak berat bersih/kasar & dimensi peti untuk pemeriksaan fizikal kargo!"
        },
        {
          id: "m2",
          shipmentTitle: "Senario 2: Kontena Makanan Import dari Australia",
          presentDocs: ["Borang K1 (Import)", "Invois Komersial", "Bill of Lading (B/L)"],
          missingDocName: "Permit MAQIS / Sijil Kuarantin",
          explanation: "Produk makanan & tumbuhan wajib disertakan Permit Kuarantin MAQIS sebelum dibenarkan dilepaskan oleh Kastam."
        },
        {
          id: "m3",
          shipmentTitle: "Senario 3: Penghantaran Komponen Elektrik Lewat B/L",
          presentDocs: ["Invois Komersial", "Packing List", "Borang K1"],
          missingDocName: "Bill of Lading (B/L) Asal / Shipping Guarantee",
          explanation: "B/L asal adalah Dokumen Hak Milik! Jika B/L lewat, pengimport wajib ada Shipping Guarantee daripada bank untuk tuntut kargo."
        },
        {
          id: "m4",
          shipmentTitle: "Senario 4: Tuntutan Tarif Keutamaan FTA",
          presentDocs: ["Invois Komersial", "Bill of Lading", "Borang K1"],
          missingDocName: "Sijil Asal Usul (Certificate of Origin - COO)",
          explanation: "Tanpa COO rasmi, pengimport tidak layak menuntut kadar cukai keutamaan/diskaun di bawah Perjanjian Perdagangan Bebas (FTA)."
        }
      ]
    },

    // Game 6: Cargo Problem Solver
    cargoSolver: {
      title: "6. Cargo Problem Solver",
      objective: "Selesaikan masalah logistik sebenar dalam masa 2 minit dan kemukakan cadangan penyelesaian terbaik.",
      problems: [
        {
          id: "p1",
          problemTitle: "Masalah 1: Nilai Invois Berbeza dengan Deklarasi K1",
          description: "Pemeriksaan kastam mendapati nilai pada Invois Komersial ialah USD 50,000 tetapi Borang K1 mengisytiharkan USD 30,000.",
          timeLimit: 120,
          bestSolution: "Lakukan pembetulan deklarasi K1 melalui ejen kastam, kemukakan bukti transaksi bank (L/C / Telegraphic Transfer) dan bayar kekurangan cukai bagi mengelak penalti."
        },
        {
          id: "p2",
          problemTitle: "Masalah 2: Produk Memerlukan Permit Tetap Tiada Lampiran",
          description: "Kontena mengandungi perabot kayu mengeksport ke UK tetapi tiada kelulusan Permit MTIB dilampirkan.",
          timeLimit: 120,
          bestSolution: "Pemuatan ditangguhkan serta merta; ejen kastam memohon permit khas secara atas talian menerusi MTIB / e-Permit sebelum pelepasan K2 diberikan."
        },
        {
          id: "p3",
          problemTitle: "Masalah 3: Kod HS Mismatch (Salah Klasifikasi)",
          description: "Pengimport mengisytiharkan Kod HS peralatan plastik biasa (duti 0%), tetapi JKDM mengklasifikasikannya sebagai peranti elektrik (duti 10%).",
          timeLimit: 120,
          bestSolution: "Membuat rayuan pengklasifikasian penentuan Kod HS rasmi di Cawangan Penilaian Kastam dan membuat bayaran cukai di bawah bantahan (payment under protest)."
        }
      ]
    }
  },

  // Quiz Questions & Case Studies
  quiz: {
    mcqs: [
      {
        id: 1,
        question: "1. Antara berikut, dokumen yang manakah berfungsi sebagai DOKUMEN HAK MILIK (Document of Title) bagi barangan yang dihantar melalui laut?",
        options: [
          "A. Commercial Invoice (Invois Komersial)",
          "B. Packing List (Senarai Pembungkusan)",
          "C. Bill of Lading (Bil Muatan - B/L)",
          "D. Air Waybill (Bil Muatan Udara - AWB)"
        ],
        correctIndex: 2,
        explanation: "Jawapan Tepat: C. Bill of Lading (B/L) merupakan satu-satunya dokumen pengangkutan laut yang bertindak sebagai dokumen hak milik sah kargo."
      },
      {
        id: 2,
        question: "2. Di bawah kaedah pembayaran Letter of Credit (L/C), pihak manakah yang memulakan permohonan pembukaan L/C tersebut?",
        options: [
          "A. Pengeksport (Exporter)",
          "B. Bank Penasihat (Advising Bank)",
          "C. Syarikat Perkapalan (Carrier)",
          "D. Pengimport (Importer)"
        ],
        correctIndex: 3,
        explanation: "Jawapan Tepat: D. Pengimport (pembeli) yang memohon dengan banknya (Issuing Bank) untuk membuka L/C bagi pihak pengeksport."
      },
      {
        id: 3,
        question: "3. Borang deklarasi kastam yang manakah perlu diisi apabila pengimport ingin mengisytiharkan barangan yang dibawa masuk ke dalam Malaysia?",
        options: [
          "A. Borang Kastam No. 1 (Borang K1)",
          "B. Borang Kastam No. 2 (Borang K2)",
          "C. Borang Kastam No. 3 (Borang K3)",
          "D. Borang Kastam No. 9 (Borang K9)"
        ],
        correctIndex: 0,
        explanation: "Jawapan Tepat: A. Borang K1 digunakan khas untuk pengisytiharan barangan IMPORT di Malaysia."
      },
      {
        id: 4,
        question: "4. Manakah antara berikut merupakan klasifikasi bagi DOKUMEN KEWANGAN (Financial Document)?",
        options: [
          "A. Sijil Asal Usul (Certificate of Origin - COO)",
          "B. Invois Komersial (Commercial Invoice)",
          "C. Bil Pertukaran / Draft (Bill of Exchange)",
          "D. Nota Perkapalan (Shipping Instructions)"
        ],
        correctIndex: 2,
        explanation: "Jawapan Tepat: C. Bil Pertukaran (Bill of Exchange / Draft) adalah dokumen kewangan. Dokumen lain seperti Invois, COO dan Nota Perkapalan adalah dokumen operasi."
      },
      {
        id: 5,
        question: "5. Mengapakah Kod Harmonized System (HS Code) sangat penting dalam urusan kastam antarabangsa?",
        options: [
          "A. Untuk menentukan kelajuan penghantaran kapal perkapalan.",
          "B. Untuk memastikan keseragaman klasifikasi produk dan menetapkan kadar duti cukai yang tepat secara global.",
          "C. Untuk bertindak sebagai sijil asal usul kilang.",
          "D. Untuk menjamin keselamatan kargo daripada risiko kecurian."
        ],
        correctIndex: 1,
        explanation: "Jawapan Tepat: B. Kod HS digunakan sebagai tatanama seragam antarabangsa untuk klasifikasi produk dan penentuan kadar duti tarif serta kawalan permit."
      }
    ],
    caseStudies: [
      {
        id: 6,
        title: "Kajian Kes 1: Eksport Perabot Kayu ke United Kingdom",
        scenario: "Syarikat Maju Jaya Sdn Bhd di Johor Bahru ingin mengeksport produk perabot kayu ke pasaran United Kingdom. Nyatakan tiga (3) dokumen operasi yang wajib disediakan oleh syarikat ini dan terangkan mengapa dokumen tersebut diperlukan.",
        answer: "1. Invois Komersial (Commercial Invoice): Penting untuk kastam menilai nilai transaksi sebenar bagi menentukan duti/cukai.\n2. Senarai Pembungkusan (Packing List): Diperlukan untuk pemeriksaan fizikal bagi memadankan kargo dengan deklarasi dokumen.\n3. Sijil Fitosanitari (Phytosanitary Certificate / MTIB): Khusus untuk produk kayu bagi membuktikan kayu telah dirawat dan bebas daripada perosak/penyakit."
      },
      {
        id: 7,
        title: "Kajian Kes 2: Krisis Kelewatan Bil Muatan (B/L) di Pelabuhan Klang",
        scenario: "Sebuah kontena berisi komponen elektrik dari Jepun telah tiba di Pelabuhan Klang. Walau bagaimanapun, disebabkan ralat kurier, Bil Muatan (B/L) asal masih belum diterima pengimport. Pengimport menghadapi risiko denda simpanan kontena (demurrage) yang sangat tinggi. Apakah dokumen kewangan yang boleh digunakan oleh pengimport bersama banknya untuk menuntut barangan tersebut dengan segera? Terangkan fungsinya.",
        answer: "• Dokumen Kewangan: Shipping Guarantee (Jaminan Penghantaran).\n• Cara Berfungsi: Bank pengimport mengeluarkan surat jaminan kepada syarikat perkapalan, berjanji memikul sebarang liabiliti undang-undang jika barangan dilepaskan tanpa B/L asal. Apabila B/L asal tiba kemudian, pengimport menukarkannya semula dengan jaminan bank tersebut untuk dibatalkan."
      }
    ]
  }
};


/* ==========================================================================
   TOPIK 3: PROSEDUR IMPORT DAN EKSPORT - KOLEJ KOMUNITI PAPAR
   Application Interactivity Engine (100% Offline Compatible)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initThemeToggle();
  initEntityExplorer();
  initTabs();
  initHSCodeChecker();
  initRoleGenerator();
  initActivityTimers();
  initQuizEngine();
  initSlideCarousel();
  initPrintModal();
  initErrorRevealers();
  // Topic 3 6 Mini-Games Suite
  initMiniGamesNav();
  initImportExportGame();
  initDocumentMatchGame();
  initProcedureLineGame();
  initCustomsOfficerSaysGame();
  initMissingDocGame();
  initCargoProblemGame();
});

// State Management
let currentTheme = 'light';
let currentSlideIndex = 0;
let totalSlides = 8;
let timerInterval = null;
let timerSeconds = 900; // 15 minutes default for simple relay activity

/* Navigation & Sidebar Toggle */
function initNavigation() {
  const menuToggle = document.getElementById('menuToggleBtn');
  const sidebar = document.getElementById('sidebar');
  const navItems = document.querySelectorAll('.nav-item');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const targetId = item.getAttribute('data-target');
      if (targetId) {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        // Switch active view section
        document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
        const targetSec = document.getElementById(targetId);
        if (targetSec) {
          targetSec.classList.add('active');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        if (window.innerWidth <= 900) {
          sidebar.classList.remove('open');
        }
      }
    });
  });
}

/* Theme Toggle (Bright Light Theme / High Contrast) */
function initThemeToggle() {
  const themeBtn = document.getElementById('themeToggleBtn');
  if (!themeBtn) return;

  themeBtn.addEventListener('click', () => {
    if (currentTheme === 'light') {
      currentTheme = 'high-contrast';
      themeBtn.innerHTML = '☀️ Mod Cerah Asal';
    } else {
      currentTheme = 'light';
      themeBtn.innerHTML = '👁️ Kontras Tinggi';
    }
    document.body.setAttribute('data-theme', currentTheme);
  });
}

/* Subtopic 3.1: Interactive Entity Explorer */
function initEntityExplorer() {
  const entityCards = document.querySelectorAll('.entity-card');
  const descContainer = document.getElementById('entityRoleDesc');

  if (!descContainer || !COURSE_DATA.subtopic31) return;

  entityCards.forEach(card => {
    card.addEventListener('click', () => {
      entityCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const entityId = card.getAttribute('data-entity');
      const found = COURSE_DATA.subtopic31.entities.find(e => e.id === entityId);
      if (found) {
        descContainer.innerHTML = `
          <strong>${found.icon} ${found.name}:</strong><br>
          <p style="margin-top:0.4rem; color: var(--text-main);">${found.role}</p>
        `;
      }
    });
  });
}

/* Tabs System (e.g. Export Steps vs Import Steps) */
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const parentContainer = btn.closest('.card') || btn.closest('.view-section');
      if (!parentContainer) return;

      const groupName = btn.getAttribute('data-tab-group');
      const targetPaneId = btn.getAttribute('data-tab-target');

      parentContainer.querySelectorAll(`.tab-btn[data-tab-group="${groupName}"]`).forEach(b => b.classList.remove('active'));
      parentContainer.querySelectorAll(`.tab-pane[data-tab-group="${groupName}"]`).forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = parentContainer.querySelector(`#${targetPaneId}`);
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

/* Activity 2: Interactive HS Code & Permit Matcher Simulator */
function initHSCodeChecker() {
  const productSelect = document.getElementById('hsProductSelect');
  const resultDisplay = document.getElementById('hsAuditResult');

  if (!productSelect || !resultDisplay) return;

  productSelect.addEventListener('change', () => {
    const selectedVal = productSelect.value;
    if (!selectedVal) {
      resultDisplay.innerHTML = '<p class="text-muted" style="font-size:0.9rem;">Sila pilih produk di atas untuk menyemak padanan Kod HS dan Permit Agensi OGA.</p>';
      return;
    }

    const foundCase = COURSE_DATA.activities[1].cases.find(c => c.id === selectedVal);
    if (foundCase) {
      resultDisplay.innerHTML = `
        <div style="background: #ffffff; padding: 1.25rem; border-radius: var(--radius-md); border-left: 4px solid var(--primary); box-shadow: var(--shadow-sm);">
          <h4 style="color: var(--primary); font-weight:700; margin-bottom: 0.5rem;">${foundCase.name}</h4>
          <p style="margin-bottom:0.3rem;"><strong>Padanan Kod HS:</strong> <span style="color:var(--primary); font-weight:800; background:rgba(128,0,32,0.1); padding:0.2rem 0.5rem; border-radius:4px;">${foundCase.hsCode}</span></p>
          <p style="margin-bottom:0.3rem;"><strong>Agensi Permit (OGA):</strong> ${foundCase.ogaPermit}</p>
          <p style="font-size:0.85rem; color:var(--text-muted); font-style:italic; margin-top:0.4rem;">💡 ${foundCase.hint}</p>
        </div>
      `;
    }
  });
}

/* Activity 1: Group Role & Relay Generator */
function initRoleGenerator() {
  const genBtn = document.getElementById('generateRolesBtn');
  const displayContainer = document.getElementById('roleGenResult');

  if (!genBtn || !displayContainer) return;

  genBtn.addEventListener('click', () => {
    const studentNamesInput = document.getElementById('studentNamesInput').value;
    const names = studentNamesInput.split(',').map(n => n.trim()).filter(n => n.length > 0);

    if (names.length < 4) {
      displayContainer.innerHTML = `<p style="color: #990000; font-weight: 600;">Sila masukkan sekurang-kurangnya 4 nama pelajar (dipisahkan dengan koma).</p>`;
      return;
    }

    // Shuffle names
    const shuffled = [...names].sort(() => 0.5 - Math.random());
    const roles = COURSE_DATA.activities[0].roles;

    let html = `<h4 style="color:var(--primary); margin-bottom:0.75rem;">Agihan Stesen Relay Kumpulan:</h4><div class="grid-2">`;
    roles.forEach((r, idx) => {
      const assignedStudent = shuffled[idx] || `Pelajar ${idx + 1}`;
      html += `
        <div style="background: #ffffff; padding: 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
          <span class="tag-badge tag-highlight" style="margin-bottom:0.3rem;">${assignedStudent}</span>
          <div style="font-weight:700; font-size:0.9rem; color:var(--primary);">${r.title}</div>
          <div style="font-size:0.8rem; color:var(--text-main);">${r.task}</div>
        </div>
      `;
    });
    html += `</div>`;
    displayContainer.innerHTML = html;
  });
}

/* Interactive Timers for Physical Relay Activity */
function initActivityTimers() {
  const timerDisplay = document.getElementById('liveTimerDisplay');
  const startBtn = document.getElementById('startTimerBtn');
  const resetBtn = document.getElementById('resetTimerBtn');

  if (!timerDisplay) return;

  function updateDisplay() {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  if (startBtn) {
    startBtn.addEventListener('click', () => {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        startBtn.textContent = '▶️ Mula Masa Relay';
      } else {
        timerInterval = setInterval(() => {
          if (timerSeconds > 0) {
            timerSeconds--;
            updateDisplay();
          } else {
            clearInterval(timerInterval);
            timerInterval = null;
            alert('⏱️ Masa Relay Telah Tamat! Sila Semak Ketepatan Kad Hantaran.');
          }
        }, 1000);
        startBtn.textContent = '⏸️ Jeda Masa';
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (timerInterval) clearInterval(timerInterval);
      timerInterval = null;
      timerSeconds = 900; // 15 mins
      updateDisplay();
      if (startBtn) startBtn.textContent = '▶️ Mula Masa Relay';
    });
  }
}

/* Activity 3: Spot-the-Mistake Revealer */
function initErrorRevealers() {
  const revealBtns = document.querySelectorAll('.reveal-error-btn');
  revealBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const errId = btn.getAttribute('data-err');
      const errBox = document.getElementById(errId);
      if (errBox) {
        if (errBox.style.display === 'block') {
          errBox.style.display = 'none';
          btn.textContent = '🔍 Semak Pembayang & Jawapan Ralat';
        } else {
          errBox.style.display = 'block';
          btn.textContent = '🙈 Sembunyikan Jawapan';
        }
      }
    });
  });
}

/* Interactive Quiz Engine */
function initQuizEngine() {
  const submitQuizBtn = document.getElementById('submitQuizBtn');
  const quizResultBox = document.getElementById('quizResultBox');

  if (!submitQuizBtn) return;

  submitQuizBtn.addEventListener('click', () => {
    let score = 0;
    const totalMCQs = COURSE_DATA.quiz.mcqs.length;

    COURSE_DATA.quiz.mcqs.forEach(mcq => {
      const selectedOpt = document.querySelector(`input[name="mcq_${mcq.id}"]:checked`);
      const expBox = document.getElementById(`exp_${mcq.id}`);

      if (expBox) {
        expBox.style.display = 'block';
        expBox.innerHTML = `<strong>Penjelasan:</strong> ${mcq.explanation}`;
      }

      if (selectedOpt) {
        const val = parseInt(selectedOpt.value, 10);
        const parentLabel = selectedOpt.closest('.quiz-option-label');
        if (val === mcq.correctIndex) {
          score++;
          if (parentLabel) parentLabel.classList.add('correct');
        } else {
          if (parentLabel) parentLabel.classList.add('incorrect');
        }
      }
    });

    const percentage = Math.round((score / totalMCQs) * 100);
    if (quizResultBox) {
      quizResultBox.innerHTML = `
        <div style="background: #ffffff; border: 2px solid var(--primary); padding: 1.5rem; border-radius: var(--radius-md); text-align: center; margin-top: 1.5rem; box-shadow: var(--shadow-md);">
          <h3 style="color: var(--primary); font-weight:800; font-size:1.5rem;">Markah Penilaian Kendiri: ${score} / ${totalMCQs} (${percentage}%)</h3>
          <p style="margin-top:0.5rem;">${percentage >= 80 ? 'Tahniah! Anda menguasai Topik 3 Prosedur Import & Eksport dengan cemerlang!' : 'Bagus! Sila semak semula nota pengajaran dan penjelasan di atas untuk pengukuhan.'}</p>
        </div>
      `;
      quizResultBox.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Case Study Answer Reveal Buttons
  const caseButtons = document.querySelectorAll('.reveal-case-btn');
  caseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-case');
      const ansBox = document.getElementById(targetId);
      if (ansBox) {
        if (ansBox.style.display === 'block') {
          ansBox.style.display = 'none';
          btn.textContent = '👁️ Papar Cadangan Jawapan Kajian Kes';
        } else {
          ansBox.style.display = 'block';
          btn.textContent = '🙈 Sembunyikan Jawapan';
        }
      }
    });
  });
}

/* Slide Carousel Presentation View */
function initSlideCarousel() {
  const slides = document.querySelectorAll('.slide-item');
  const prevBtn = document.getElementById('prevSlideBtn');
  const nextBtn = document.getElementById('nextSlideBtn');
  const counter = document.getElementById('slideCounter');

  if (!slides.length) return;
  totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((s, idx) => {
      s.classList.remove('active');
      if (idx === index) s.classList.add('active');
    });
    if (counter) counter.textContent = `Slaid ${index + 1} / ${totalSlides}`;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentSlideIndex > 0) {
        currentSlideIndex--;
        showSlide(currentSlideIndex);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentSlideIndex < totalSlides - 1) {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
      }
    });
  }

  // Keyboard navigation for presentation slides
  document.addEventListener('keydown', (e) => {
    const slideView = document.getElementById('slideViewSection');
    if (slideView && slideView.classList.contains('active')) {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        if (currentSlideIndex < totalSlides - 1) {
          currentSlideIndex++;
          showSlide(currentSlideIndex);
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentSlideIndex > 0) {
          currentSlideIndex--;
          showSlide(currentSlideIndex);
        }
      }
    }
  });
}

/* Printable Worksheet & Activity Card Modal */
function initPrintModal() {
  const printModal = document.getElementById('printModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const openPrintBtn = document.getElementById('openPrintModalBtn');
  const printNowBtn = document.getElementById('printNowBtn');

  if (openPrintBtn && printModal) {
    openPrintBtn.addEventListener('click', () => {
      printModal.classList.add('active');
    });
  }

  if (closeModalBtn && printModal) {
    closeModalBtn.addEventListener('click', () => {
      printModal.classList.remove('active');
    });
  }

  if (printNowBtn) {
    printNowBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

/* ==========================================================================
   TOPIK 3: 6 MINI-GAMES SUITE ENGINE IMPLEMENTATIONS
   ========================================================================== */

/* Mini-Games Nav Tab Switcher */
function initMiniGamesNav() {
  const navBtns = document.querySelectorAll('.game-nav-btn');
  const gamePanes = document.querySelectorAll('.game-pane');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-game-target');
      navBtns.forEach(b => b.classList.remove('active'));
      gamePanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

/* Game 1: Import or Export? */
function initImportExportGame() {
  const data = COURSE_DATA.miniGames?.importExport;
  if (!data) return;

  let currentIdx = 0;
  let score = 0;

  const cardEl = document.getElementById('ieScenarioCard');
  const indexEl = document.getElementById('ieScenarioIndex');
  const scoreEl = document.getElementById('ieScoreDisplay');
  const feedbackEl = document.getElementById('ieFeedbackBox');
  const voteBtns = document.querySelectorAll('.ie-vote-btn');

  if (!cardEl) return;

  function renderScenario() {
    if (currentIdx >= data.scenarios.length) {
      cardEl.innerHTML = `🏆 <strong>PERMAINAN TAMAT!</strong> Kumpulan anda mendapat <strong>${score} / ${data.scenarios.length}</strong> jawapan tepat!`;
      feedbackEl.style.display = 'none';
      return;
    }

    const sc = data.scenarios[currentIdx];
    indexEl.textContent = `Situasi ${currentIdx + 1} dari ${data.scenarios.length}`;
    scoreEl.textContent = `Skor: ${score} / ${data.scenarios.length}`;
    cardEl.textContent = `"${sc.situation}"`;
    feedbackEl.style.display = 'none';
  }

  voteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentIdx >= data.scenarios.length) return;

      const sc = data.scenarios[currentIdx];
      const vote = btn.getAttribute('data-vote');

      feedbackEl.style.display = 'block';
      if (vote === sc.answer) {
        score++;
        feedbackEl.style.background = '#ecfdf5';
        feedbackEl.style.color = '#065f46';
        feedbackEl.innerHTML = `✅ <strong>TEPAT! (${sc.answer})</strong><br>${sc.explanation}`;
      } else {
        feedbackEl.style.background = '#fef2f2';
        feedbackEl.style.color = '#991b1b';
        feedbackEl.innerHTML = `❌ <strong>SALAH! Jawapan Sebenar: ${sc.answer}</strong><br>${sc.explanation}`;
      }

      currentIdx++;
      setTimeout(() => {
        renderScenario();
      }, 3000);
    });
  });

  renderScenario();
}

/* Game 2: Document Match-Up */
function initDocumentMatchGame() {
  const data = COURSE_DATA.miniGames?.documentMatch;
  if (!data) return;

  const namesCol = document.getElementById('docNamesCol');
  const funcsCol = document.getElementById('docFuncsCol');
  const victoryBanner = document.getElementById('matchVictoryBanner');
  const resetBtn = document.getElementById('resetMatchGameBtn');

  if (!namesCol || !funcsCol) return;

  let selectedDoc = null;
  let matchedCount = 0;

  function renderMatchGame() {
    namesCol.innerHTML = '';
    funcsCol.innerHTML = '';
    victoryBanner.style.display = 'none';
    matchedCount = 0;
    selectedDoc = null;

    const docList = [...data.pairs].sort(() => Math.random() - 0.5);
    const funcList = [...data.pairs].sort(() => Math.random() - 0.5);

    docList.forEach(item => {
      const el = document.createElement('div');
      el.className = 'match-item';
      el.dataset.id = item.id;
      el.textContent = `📄 ${item.docName}`;
      el.addEventListener('click', () => {
        document.querySelectorAll('#docNamesCol .match-item').forEach(i => i.classList.remove('selected'));
        el.classList.add('selected');
        selectedDoc = item.id;
      });
      namesCol.appendChild(el);
    });

    funcList.forEach(item => {
      const el = document.createElement('div');
      el.className = 'match-item';
      el.dataset.id = item.id;
      el.textContent = `💡 ${item.functionDesc}`;
      el.addEventListener('click', () => {
        if (!selectedDoc) return;

        if (selectedDoc === item.id) {
          const matchedDocEl = namesCol.querySelector(`.match-item[data-id="${item.id}"]`);
          if (matchedDocEl) matchedDocEl.classList.add('matched');
          el.classList.add('matched');
          matchedCount++;

          selectedDoc = null;
          document.querySelectorAll('#docNamesCol .match-item').forEach(i => i.classList.remove('selected'));

          if (matchedCount === data.pairs.length) {
            victoryBanner.style.display = 'block';
          }
        } else {
          el.style.borderColor = '#ef4444';
          setTimeout(() => {
            el.style.borderColor = '';
          }, 800);
        }
      });
      funcsCol.appendChild(el);
    });
  }

  if (resetBtn) resetBtn.addEventListener('click', renderMatchGame);
  renderMatchGame();
}

/* Game 3: Human Procedure Line */
function initProcedureLineGame() {
  const data = COURSE_DATA.miniGames?.procedureLine;
  if (!data) return;

  const container = document.getElementById('procedureStepsList');
  const checkBtn = document.getElementById('checkProcedureOrderBtn');
  const resultBox = document.getElementById('procedureResultBox');

  if (!container) return;

  let currentSteps = [...data.steps].sort(() => Math.random() - 0.5);

  function renderSteps() {
    container.innerHTML = '';
    currentSteps.forEach((st, idx) => {
      const chip = document.createElement('div');
      chip.className = 'procedure-chip';
      chip.innerHTML = `
        <div>
          <div class="chip-title">Kedudukan ${idx + 1}: ${st.title}</div>
          <div class="chip-desc">${st.desc}</div>
        </div>
        <div style="display:flex; gap:0.25rem;">
          <button class="btn btn-outline move-up-btn" style="padding:0.2rem 0.5rem;" ${idx === 0 ? 'disabled' : ''}>▲</button>
          <button class="btn btn-outline move-down-btn" style="padding:0.2rem 0.5rem;" ${idx === currentSteps.length - 1 ? 'disabled' : ''}>▼</button>
        </div>
      `;

      chip.querySelector('.move-up-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        if (idx > 0) {
          const temp = currentSteps[idx];
          currentSteps[idx] = currentSteps[idx - 1];
          currentSteps[idx - 1] = temp;
          renderSteps();
        }
      });

      chip.querySelector('.move-down-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        if (idx < currentSteps.length - 1) {
          const temp = currentSteps[idx];
          currentSteps[idx] = currentSteps[idx + 1];
          currentSteps[idx + 1] = temp;
          renderSteps();
        }
      });

      container.appendChild(chip);
    });
  }

  if (checkBtn) {
    checkBtn.addEventListener('click', () => {
      let isCorrect = true;
      currentSteps.forEach((st, idx) => {
        if (st.stepNum !== idx + 1) isCorrect = false;
      });

      resultBox.style.display = 'block';
      if (isCorrect) {
        resultBox.style.background = '#ecfdf5';
        resultBox.style.color = '#065f46';
        resultBox.innerHTML = `🎉 <strong>URUTAN PROSEDUR TEPAT!</strong> Kelas anda berjaya menyusun fasa 1 hingga 6 mengikut kronologi sah import/eksport!`;
      } else {
        resultBox.style.background = '#fef2f2';
        resultBox.style.color = '#991b1b';
        resultBox.innerHTML = `❌ <strong>Terdapat ralat pada urutan!</strong> Semak semula fasa permohonan permit, deklarasi kastam, dan pembayaran cukai.`;
      }
    });
  }

  renderSteps();
}

/* Game 4: Customs Officer Says */
function initCustomsOfficerSaysGame() {
  const data = COURSE_DATA.miniGames?.customsSays;
  if (!data) return;

  const commandBox = document.getElementById('customsCommandBox');
  const actionBox = document.getElementById('customsActionBox');
  const nextBtn = document.getElementById('nextCustomsCommandBtn');
  const revealBtn = document.getElementById('revealCustomsActionBtn');

  if (!commandBox) return;

  let currentCmd = null;

  function generateCommand() {
    actionBox.style.display = 'none';
    const rand = data.commands[Math.floor(Math.random() * data.commands.length)];
    currentCmd = rand;
    commandBox.innerHTML = `📢 <em>"${rand.text}"</em>`;
  }

  if (nextBtn) nextBtn.addEventListener('click', generateCommand);

  if (revealBtn) {
    revealBtn.addEventListener('click', () => {
      if (!currentCmd) return;
      actionBox.style.display = 'block';
      actionBox.innerHTML = `
        <strong>Status Arahan:</strong> ${currentCmd.isTrick ? '⚠️ ARAHAN HELAH (Tiada "Customs officer says")' : '✅ ARAHAN SAH'}<br>
        <strong>Tindakan Wajib Pelajar:</strong> ${currentCmd.action}
      `;
    });
  }
}

/* Game 5: Find the Missing Document */
function initMissingDocGame() {
  const data = COURSE_DATA.miniGames?.missingDoc;
  if (!data) return;

  const selectEl = document.getElementById('missingDocSelect');
  const displayEl = document.getElementById('missingDocDisplay');

  if (!selectEl || !displayEl) return;

  function renderMissingDoc() {
    const scId = selectEl.value;
    const sc = data.scenarios.find(s => s.id === scId);
    if (!sc) return;

    displayEl.innerHTML = `
      <div style="background:#ffffff; padding:1.25rem; border-radius:8px; border-left:4px solid #7c3aed; box-shadow:0 2px 6px rgba(0,0,0,0.05);">
        <h4 style="color:#7c3aed; margin-bottom:0.75rem;">${sc.shipmentTitle}</h4>
        <p style="margin-bottom:0.5rem;"><strong>Dokumen Disediakan dalam Fail:</strong></p>
        <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem;">
          ${sc.presentDocs.map(d => `<span style="background:#f3e8ff; color:#6b21a8; padding:0.3rem 0.75rem; border-radius:15px; font-weight:700; font-size:0.85rem;">📄 ${d}</span>`).join('')}
          <span style="background:#fee2e2; color:#991b1b; padding:0.3rem 0.75rem; border-radius:15px; font-weight:700; font-size:0.85rem; border:1px dashed #ef4444;">❓ [1 DOKUMEN HILANG]</span>
        </div>

        <button class="btn btn-outline reveal-missing-btn" style="width:100%; justify-content:center;">🔍 Papar Dokumen Tersebut & Penerangan</button>
        
        <div class="missing-explanation-box" style="display:none; margin-top:1rem; padding:1rem; background:#faf5ff; border-radius:6px; color:#581c87;">
          <h5 style="color:#6b21a8; font-weight:800; font-size:1rem;">Dokumen Hilang: ${sc.missingDocName}</h5>
          <p style="margin-top:0.3rem; font-size:0.9rem;">${sc.explanation}</p>
        </div>
      </div>
    `;

    displayEl.querySelector('.reveal-missing-btn').addEventListener('click', () => {
      const expBox = displayEl.querySelector('.missing-explanation-box');
      expBox.style.display = 'block';
    });
  }

  selectEl.addEventListener('change', renderMissingDoc);
  renderMissingDoc();
}

/* Game 6: Cargo Problem Solver */
function initCargoProblemGame() {
  const data = COURSE_DATA.miniGames?.cargoSolver;
  if (!data) return;

  const selectEl = document.getElementById('cargoProblemSelect');
  const detailsEl = document.getElementById('cargoProblemDetails');
  const timerEl = document.getElementById('cargoTimerDisplay');
  const startTimerBtn = document.getElementById('startCargoTimerBtn');
  const revealBtn = document.getElementById('revealCargoSolutionBtn');
  const solutionBox = document.getElementById('cargoSolutionBox');

  if (!selectEl || !detailsEl) return;

  let countdown = 120;
  let timerId = null;

  function renderProblem() {
    if (timerId) clearInterval(timerId);
    solutionBox.style.display = 'none';
    countdown = 120;
    timerEl.textContent = '02:00';

    const pId = selectEl.value;
    const prob = data.problems.find(p => p.id === pId);
    if (!prob) return;

    detailsEl.innerHTML = `
      <div style="background:#ffffff; padding:1.25rem; border-radius:8px; border-left:4px solid #4f46e5; box-shadow:0 2px 6px rgba(0,0,0,0.05);">
        <h4 style="color:#4f46e5; font-size:1.1rem; margin-bottom:0.5rem;">${prob.problemTitle}</h4>
        <p style="color:#334155; font-size:0.95rem;">${prob.description}</p>
      </div>
    `;
  }

  if (startTimerBtn) {
    startTimerBtn.addEventListener('click', () => {
      if (timerId) clearInterval(timerId);
      countdown = 120;
      timerId = setInterval(() => {
        countdown--;
        const mins = String(Math.floor(countdown / 60)).padStart(2, '0');
        const secs = String(countdown % 60).padStart(2, '0');
        timerEl.textContent = `${mins}:${secs}`;

        if (countdown <= 0) {
          clearInterval(timerId);
          timerEl.textContent = 'TAMAT!';
        }
      }, 1000);
    });
  }

  if (revealBtn) {
    revealBtn.addEventListener('click', () => {
      const pId = selectEl.value;
      const prob = data.problems.find(p => p.id === pId);
      if (!prob) return;

      solutionBox.style.display = 'block';
      solutionBox.innerHTML = `
        <strong>Cadangan Solusi Praktikal Terbaik:</strong><br>
        <p style="margin-top:0.3rem;">${prob.bestSolution}</p>
      `;
    });
  }

  selectEl.addEventListener('change', renderProblem);
  renderProblem();
}

