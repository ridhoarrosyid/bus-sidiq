import React, { useState, useEffect } from 'react';
import {
  BusFront,
  MapPin,
  Users,
  Briefcase,
  Phone,
  Instagram,
  ChevronRight,
  Menu,
  X,
  CheckCircle2,
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Efek untuk mengubah warna navbar saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Placeholder untuk nomor WhatsApp (Ganti dengan nomor asli nantinya)
  const waNumber = '6281234567890';
  const waMessage =
    'Halo PO. Putri Candi, saya ingin bertanya mengenai ketersediaan dan harga sewa armada bus.';
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    waMessage
  )}`;

  return (
    <div className='min-h-screen font-sans text-gray-800 bg-gray-50'>
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-md py-3'
            : 'bg-black/40 backdrop-blur-sm py-5'
        }`}
      >
        <div className='container mx-auto px-4 md:px-8 flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <div className='w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold text-xl'>
              PC
            </div>
            <div>
              <h1
                className={`font-bold text-lg leading-tight ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                PO. PUTRI CANDI
              </h1>
              <p
                className={`text-xs ${
                  isScrolled ? 'text-gray-500' : 'text-gray-300'
                }`}
              >
                PT. Kurniawan Sidiq Trans
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center gap-8'>
            <a
              href='#layanan'
              className={`font-medium hover:text-orange-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Layanan
            </a>
            <a
              href='#armada'
              className={`font-medium hover:text-orange-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Armada
            </a>
            <a
              href='#galeri'
              className={`font-medium hover:text-orange-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Galeri
            </a>
            <a
              href={waLink}
              target='_blank'
              rel='noreferrer'
              className='bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg shadow-orange-500/30'
            >
              <Phone size={18} />
              Pesan Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className='md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t py-4 px-4 flex flex-col gap-4'>
            <a
              href='#layanan'
              onClick={() => setMobileMenuOpen(false)}
              className='text-gray-800 font-medium py-2 border-b'
            >
              Layanan
            </a>
            <a
              href='#armada'
              onClick={() => setMobileMenuOpen(false)}
              className='text-gray-800 font-medium py-2 border-b'
            >
              Armada
            </a>
            <a
              href='#galeri'
              onClick={() => setMobileMenuOpen(false)}
              className='text-gray-800 font-medium py-2 border-b'
            >
              Galeri
            </a>
            <a
              href={waLink}
              target='_blank'
              rel='noreferrer'
              className='bg-orange-600 text-white text-center px-4 py-3 rounded-lg font-bold flex justify-center items-center gap-2'
            >
              <Phone size={18} /> Hubungi via WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className='relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center min-h-[85vh]'>
        {/* Background Image (Placeholder menggunakan gambar bus nuansa orange) */}
        <div className='absolute inset-0 z-0'>
          <img
            src='https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop'
            alt='Armada Bus Putri Candi'
            className='w-full h-full object-cover object-center'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30'></div>
        </div>

        <div className='container mx-auto px-4 md:px-8 relative z-10'>
          <div className='max-w-2xl text-white'>
            <div className='inline-block bg-orange-600/20 text-orange-400 border border-orange-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm'>
              🌟 Jasa Transportasi Terbaik di Lampung
            </div>
            <h1 className='text-4xl md:text-6xl font-extrabold leading-tight mb-6'>
              Perjalanan Aman & Nyaman Bersama{' '}
              <span className='text-orange-500'>Putri Candi</span>
            </h1>
            <p className='text-lg md:text-xl text-gray-200 mb-8 leading-relaxed'>
              Kami melayani perjalanan AKAP, AKDP, Antar Jemput Karyawan, dan
              Pariwisata dengan armada Jetbus 3+ & Jetbus 5 terbaru yang bersih,
              aman, dan berkelas.
            </p>

            <div className='flex flex-col sm:flex-row gap-4'>
              <a
                href={waLink}
                target='_blank'
                rel='noreferrer'
                className='bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex justify-center items-center gap-2 transition-all hover:scale-105'
              >
                Cek Ketersediaan Armada <ChevronRight size={20} />
              </a>
              <a
                href='#armada'
                className='bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg flex justify-center items-center transition-all'
              >
                Lihat Tipe Bus
              </a>
            </div>

            <div className='mt-10 flex items-center gap-6 text-sm text-gray-300'>
              <div className='flex items-center gap-2'>
                <CheckCircle2 className='text-orange-500' size={18} /> Bigbus
                50/60 Seat
              </div>
              <div className='flex items-center gap-2'>
                <CheckCircle2 className='text-orange-500' size={18} /> Medium 30
                Seat
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan Section */}
      <section id='layanan' className='py-20 bg-white'>
        <div className='container mx-auto px-4 md:px-8'>
          <div className='text-center max-w-2xl mx-auto mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Layanan Kami
            </h2>
            <p className='text-gray-600'>
              PT. Kurniawan Sidiq Trans menyediakan berbagai solusi transportasi
              darat yang disesuaikan dengan kebutuhan Anda.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                icon: <MapPin className='text-orange-500' size={32} />,
                title: 'AKAP',
                desc: 'Antar Kota Antar Provinsi. Rute terpercaya dengan kenyamanan maksimal untuk perjalanan jauh Anda.',
              },
              {
                icon: <MapPin className='text-orange-500' size={32} />,
                title: 'AKDP',
                desc: 'Antar Kota Dalam Provinsi. Solusi cepat dan aman untuk mobilitas antar kota di wilayah Lampung dan sekitarnya.',
              },
              {
                icon: <Briefcase className='text-orange-500' size={32} />,
                title: 'Antar Jemput Karyawan (AJK)',
                desc: 'Layanan penjemputan karyawan perusahaan yang tepat waktu dan terkoordinasi dengan baik.',
              },
              {
                icon: <Users className='text-orange-500' size={32} />,
                title: 'Bus Pariwisata',
                desc: 'Armada premium yang siap disewakan untuk study tour, ziarah, gathering, dan liburan keluarga.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className='bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300'
              >
                <div className='bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6'>
                  {item.icon}
                </div>
                <h3 className='text-xl font-bold mb-3'>{item.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Armada Section */}
      <section id='armada' className='py-20 bg-gray-900 text-white'>
        <div className='container mx-auto px-4 md:px-8'>
          <div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-6'>
            <div className='max-w-2xl'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Armada Siap Disewakan
              </h2>
              <p className='text-gray-400'>
                Didukung dengan unit terbaru dari karoseri ternama (Jetbus 3+ &
                Jetbus 5) untuk menjamin keselamatan dan kenyamanan penumpang.
              </p>
            </div>
            <a
              href={waLink}
              target='_blank'
              rel='noreferrer'
              className='bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-colors'
            >
              Booking Sekarang
            </a>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Big Bus */}
            <div className='group relative overflow-hidden rounded-2xl bg-gray-800'>
              <div className='h-64 sm:h-80 overflow-hidden relative'>
                <img
                  src='https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop'
                  alt='Big Bus Putri Candi'
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute top-4 right-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider'>
                  Tersedia Jetbus 5
                </div>
              </div>
              <div className='p-8'>
                <div className='flex items-center gap-2 text-orange-400 font-semibold mb-2'>
                  <BusFront size={20} /> Kelas Eksekutif & Pariwisata
                </div>
                <h3 className='text-2xl font-bold mb-3'>Bigbus (50/60 Seat)</h3>
                <p className='text-gray-400 mb-6'>
                  Cocok untuk rombongan besar, ziarah, atau study tour.
                  Dilengkapi fasilitas full AC, Audio/Karaoke, Reclining Seat,
                  dan pengemudi berpengalaman.
                </p>
                <ul className='grid grid-cols-2 gap-3 text-sm text-gray-300'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle2 size={16} className='text-orange-500' /> Full
                    AC
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle2 size={16} className='text-orange-500' /> Audio
                    / TV
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle2 size={16} className='text-orange-500' />{' '}
                    Bagasi Luas
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle2 size={16} className='text-orange-500' />{' '}
                    Charger Port
                  </li>
                </ul>
              </div>
            </div>

            {/* Medium Bus */}
            <div className='group relative overflow-hidden rounded-2xl bg-gray-800'>
              <div className='h-64 sm:h-80 overflow-hidden relative'>
                <img
                  src='https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=2070&auto=format&fit=crop'
                  alt='Medium Bus Putri Candi'
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
              </div>
              <div className='p-8'>
                <div className='flex items-center gap-2 text-orange-400 font-semibold mb-2'>
                  <BusFront size={20} /> Kelas Eksekutif & Pariwisata
                </div>
                <h3 className='text-2xl font-bold mb-3'>
                  Medium Bus (30 Seat)
                </h3>
                <p className='text-gray-400 mb-6'>
                  Pilihan efisien untuk perjalanan keluarga besar, rombongan
                  kantor, atau rute Antar Kota Dalam Provinsi dengan kenyamanan
                  maksimal.
                </p>
                <ul className='grid grid-cols-2 gap-3 text-sm text-gray-300'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle2 size={16} className='text-orange-500' /> Full
                    AC
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle2 size={16} className='text-orange-500' /> Audio
                    / TV
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle2 size={16} className='text-orange-500' /> Seat
                    Nyaman
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle2 size={16} className='text-orange-500' />{' '}
                    Armada Terawat
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section / Promo */}
      <section className='py-20 bg-orange-600 relative overflow-hidden'>
        {/* Abstract pattern background */}
        <div
          className='absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none'
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>

        <div className='container mx-auto px-4 md:px-8 relative z-10 text-center'>
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
            Ada Agenda Perjalanan Dalam Waktu Dekat?
          </h2>
          <p className='text-orange-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto'>
            Dapatkan penawaran harga terbaik untuk rombongan Anda. Jangan ragu
            untuk berkonsultasi mengenai rute dan jadwal dengan tim kami.
          </p>
          <a
            href={waLink}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl shadow-orange-900/20'
          >
            <Phone size={24} /> Hubungi Admin Sekarang
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-950 text-gray-400 py-12 border-t border-gray-800'>
        <div className='container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-10'>
          <div>
            <div className='flex items-center gap-2 mb-6'>
              <div className='w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold text-sm'>
                PC
              </div>
              <div>
                <h3 className='text-white font-bold text-lg'>
                  PO. PUTRI CANDI
                </h3>
              </div>
            </div>
            <p className='mb-6 leading-relaxed text-sm'>
              PT. Kurniawan Sidiq Trans.
              <br />
              Penyedia layanan transportasi darat terpercaya: AKAP, AKDP, Antar
              Jemput Karyawan, dan Pariwisata.
            </p>
            <div className='flex gap-4'>
              <a
                href='https://instagram.com/putricandi_lampung'
                target='_blank'
                rel='noreferrer'
                className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors'
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className='text-white font-bold mb-6'>Layanan Cepat</h4>
            <ul className='flex flex-col gap-3 text-sm'>
              <li>
                <a
                  href='#layanan'
                  className='hover:text-orange-500 transition-colors'
                >
                  Layanan Transportasi
                </a>
              </li>
              <li>
                <a
                  href='#armada'
                  className='hover:text-orange-500 transition-colors'
                >
                  Katalog Armada
                </a>
              </li>
              <li>
                <a
                  href='https://putricandigroup.web.id'
                  target='_blank'
                  rel='noreferrer'
                  className='hover:text-orange-500 transition-colors'
                >
                  Website Resmi Grup
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-white font-bold mb-6'>Kontak & Lokasi</h4>
            <ul className='flex flex-col gap-4 text-sm'>
              <li className='flex items-start gap-3'>
                <MapPin className='text-orange-500 shrink-0 mt-0.5' size={18} />
                <span>
                  Lampung, Indonesia (Silakan hubungi kami untuk lokasi garasi
                  lengkap).
                </span>
              </li>
              <li className='flex items-start gap-3'>
                <Phone className='text-orange-500 shrink-0 mt-0.5' size={18} />
                <span>WhatsApp: Menerima konsultasi 24 Jam</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='container mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-sm'>
          <p>
            &copy; {new Date().getFullYear()} PO. Putri Candi (PT. Kurniawan
            Sidiq Trans). All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
