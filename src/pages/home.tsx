import React, { useEffect, useState } from 'react';

// Todas as fotos da galeria (exceto as selecionadas) — rodam em cima a cada 5s
const galleryPhotos = [
    { src: '/fotos/fotografias/2.jpg', alt: 'Foto 1' },
    { src: '/fotos/fotografias/3.jpg', alt: 'Foto 2' },
    { src: '/fotos/fotografias/2022-02-05_XEBABA-13.jpg', alt: 'Foto 3' },
    { src: '/fotos/fotografias/20220611_025403980_iOS.jpg', alt: 'Foto 4' },
    { src: '/fotos/fotografias/20220611_031323770_iOS.jpg', alt: 'Foto 5' },
    { src: '/fotos/fotografias/20231119_033549000_iOS.jpg', alt: 'Foto 6' },
    { src: '/fotos/fotografias/20231119_042749000_iOS.jpg', alt: 'Foto 7' },
    { src: '/fotos/fotografias/20231119_045429000_iOS.jpg', alt: 'Foto 8' },
    { src: '/fotos/fotografias/20231119_045655000_iOS.jpg', alt: 'Foto 9' },
    { src: '/fotos/fotografias/20240508_224030032_iOS.jpg', alt: 'Foto 10' },
    { src: '/fotos/fotografias/20240508_224222089_iOS.jpg', alt: 'Foto 11' },
    { src: '/fotos/fotografias/20240531_003323050_iOS.jpg', alt: 'Foto 12' },
    { src: '/fotos/fotografias/20240531_005613640_iOS.jpg', alt: 'Foto 13' },
    { src: '/fotos/fotografias/20240902_233733955_iOS.jpg', alt: 'Foto 14' },
    { src: '/fotos/fotografias/20250828_045009870_iOS.jpg', alt: 'Foto 15' },
    { src: '/fotos/fotografias/20250828_045433580_iOS.jpg', alt: 'Foto 16' },
    { src: '/fotos/fotografias/IMG_4297.jpg', alt: 'Foto 17' },
];

// Fotos da pasta selecionadas — rodam embaixo a cada 2s
const selectedPhotos = [
    { src: '/fotos/fotografias/selecionadas/20231119_033654000_iOS.jpg', alt: 'Destaque 1' },
    { src: '/fotos/fotografias/selecionadas/20240531_005528590_iOS.jpg', alt: 'Destaque 2' },
    { src: '/fotos/fotografias/selecionadas/20240531_005613290_iOS.jpg', alt: 'Destaque 3' },
    { src: '/fotos/fotografias/selecionadas/20240531_010222310_iOS.jpg', alt: 'Destaque 4' },
    { src: '/fotos/fotografias/selecionadas/20240531_012755310_iOS.jpg', alt: 'Destaque 5' },
    { src: '/fotos/fotografias/selecionadas/20250828_045201450_iOS.jpg', alt: 'Destaque 6' },
];

const Home: React.FC = () => {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [isCarouselPaused, setIsCarouselPaused] = useState(false);
    const [galleryOffset, setGalleryOffset] = useState(0);
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
    const [scModalOpen, setScModalOpen] = useState(false);

    const openLightbox = (src: string) => setLightboxSrc(src);
    const closeLightbox = () => setLightboxSrc(null);

    // Carousel embaixo: fotos selecionadas, muda a cada 2s
    useEffect(() => {
        if (isCarouselPaused) return;
        const id = window.setInterval(() => {
            setCarouselIndex((prev) => (prev + 1) % selectedPhotos.length);
        }, 2000);
        return () => window.clearInterval(id);
    }, [isCarouselPaused]);

    // Galeria em cima: rotaciona 8 fotos a cada 5s
    useEffect(() => {
        const id = window.setInterval(() => {
            setGalleryOffset((prev) => (prev + 8) % galleryPhotos.length);
        }, 5000);
        return () => window.clearInterval(id);
    }, []);

    const g = (i: number) => galleryPhotos[(galleryOffset + i) % galleryPhotos.length];

    const topRowPhotos = [
        { src: g(0).src, alt: g(0).alt, kind: 'wide' },
        { src: g(1).src, alt: g(1).alt, kind: 'wide' },
        { src: g(2).src, alt: g(2).alt, kind: 'wide' },
        { src: g(3).src, alt: g(3).alt, kind: 'phone' },
    ];

    const midRowPhotos = [
        { src: g(4).src, alt: g(4).alt },
        { src: g(5).src, alt: g(5).alt },
        { src: g(6).src, alt: g(6).alt },
        { src: g(7).src, alt: g(7).alt },
    ];

    const goPrev = () => {
        setCarouselIndex((prev) => (prev === 0 ? selectedPhotos.length - 1 : prev - 1));
    };

    const goNext = () => {
        setCarouselIndex((prev) => (prev + 1) % selectedPhotos.length);
    };

    return (
        <main className="presskit">
            <nav className="leftMenu" id="topo">
                <a href="#videos"><i className="fa-solid fa-video" /> VIDEOS</a>
                <a href="#musicas"><i className="fa-solid fa-music" /> MUSICAS</a>
                <a href="#social"><i className="fa-brands fa-instagram" /> SOCIAL</a>
            </nav>

            <section className="stage">
                <section className="hero">
                    <img className="logo-image" src="/fotos/logo.png" alt="Logo Hyper" />

                    <div className="centerActions">
                        <a className="circle" href="#musicas"><i className="fa-solid fa-list" /></a>
                        <a className="circle" href="#videos"><i className="fa-solid fa-play" /></a>
                        <a className="circle" href="#contato"><i className="fa-solid fa-comment" /></a>
                    </div>

                    <a className="scrollDown" href="#musicas"><i className="fa-solid fa-chevron-down" /></a>

                    <div className="socialBar" id="social">
                        <a href="https://www.instagram.com/hypermusic_/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram" /></a>
                        <a href="http://www.tiktok.com/@hypermusicdj" target="_blank" rel="noreferrer"><i className="fa-brands fa-tiktok" /></a>
                        <a href="https://open.spotify.com/artist/1OAK3BKP2eKBFnnjlbztk3" target="_blank" rel="noreferrer"><i className="fa-brands fa-spotify" /></a>
                        <a href="https://www.youtube.com/channel/UCHBmbgyc4Qsm4TqVE6qm2dw" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube" /></a>
                        <a href="https://soundcloud.com/hypeermusic" target="_blank" rel="noreferrer"><i className="fa-brands fa-soundcloud" /></a>
                    </div>
                </section>
            </section>

            <aside className="rightFabs">
                <a className="fab" href="#topo"><i className="fa-solid fa-chevron-up" /></a>
                <a className="fab whatsapp" href="https://wa.me/5534998662647" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp" /></a>
            </aside>

            <section className="section container">
                <h2 className="section-title">Quem é Hyper</h2>
                <p>
                    Douglas tem 27 anos, nascido em Brasília, e é a mente por trás de Hyper. Um nome que carrega propósito: significa grandioso, algo muito elevado. E é exatamente essa energia que ele busca transmitir para as pessoas através da música — cada som é uma sensação que ele vive e quer que você viva também.
                </p>
                <p>
                    O raio é o símbolo que o representa. Ele eletriza onde toca, e é isso que acontece aqui. Douglas não se prende a um único estilo ou som — ele se adapta. Ao momento, ao evento, à energia que vem de volta da pista. Quando ele está nos decks, está totalmente entregue ao projeto, oferecendo o melhor dessa experiência sonora.
                </p>
            </section>

            <section className="section container" id="musicas">
                <h2 className="section-title">Tracks e DJ Sets</h2>
                <div className="embed-wrap">
                    <iframe
                        title="Spotify Hypeer"
                        src="https://open.spotify.com/embed/artist/1OAK3BKP2eKBFnnjlbztk3?utm_source=generator&theme=0"
                        width="100%"
                        height="352"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    />
                </div>
                <div className="embed-wrap soundcloud-card">
                    <div className="sc-card-inner">
                        <i className="fa-brands fa-soundcloud sc-icon" />
                        <div className="sc-card-text">
                            <span className="sc-card-label">Ouça no SoundCloud</span>
                            <span className="sc-card-name">hypeermusic</span>
                        </div>
                        <button
                            type="button"
                            className="sc-card-btn"
                            onClick={() => setScModalOpen(true)}
                        >
                            <i className="fa-solid fa-play" /> Abrir
                        </button>
                    </div>
                </div>
            </section>

            <section className="section container" id="videos">
                <h2 className="section-title">Fotografias</h2>
                <div className="photo-mosaic">
                    <div className="photo-row photo-row-top">
                        {topRowPhotos.map((photo) => (
                            <figure
                                key={photo.src}
                                className={`photo-slot ${photo.kind === 'phone' ? 'photo-slot-phone' : 'photo-slot-wide'}`}
                                onClick={() => openLightbox(photo.src)}
                            >
                                <img src={photo.src} alt={photo.alt} />
                            </figure>
                        ))}
                    </div>

                    <div className="photo-row photo-row-mid">
                        {midRowPhotos.map((photo) => (
                            <figure key={photo.src} className="photo-slot photo-slot-square" onClick={() => openLightbox(photo.src)}>
                                <img src={photo.src} alt={photo.alt} />
                            </figure>
                        ))}
                    </div>

                    <figure
                        className="photo-slot photo-slot-featured"
                        onMouseEnter={() => setIsCarouselPaused(true)}
                        onMouseLeave={() => setIsCarouselPaused(false)}
                    >
                        <img
                            src={selectedPhotos[carouselIndex].src}
                            alt={selectedPhotos[carouselIndex].alt}
                            onClick={() => openLightbox(selectedPhotos[carouselIndex].src)}
                            style={{ cursor: 'zoom-in' }}
                        />
                        <div className="carousel-controls">
                            <button type="button" className="carousel-btn" onClick={goPrev} aria-label="Foto anterior">
                                <i className="fa-solid fa-chevron-left" />
                            </button>
                            <button type="button" className="carousel-btn" onClick={goNext} aria-label="Proxima foto">
                                <i className="fa-solid fa-chevron-right" />
                            </button>
                        </div>
                        <div className="carousel-dots" role="tablist" aria-label="Seletor de fotos">
                            {selectedPhotos.map((photo, index) => (
                                <button
                                    key={photo.src}
                                    type="button"
                                    role="tab"
                                    aria-selected={carouselIndex === index}
                                    className={`carousel-dot ${carouselIndex === index ? 'is-active' : ''}`}
                                    onClick={() => setCarouselIndex(index)}
                                />
                            ))}
                        </div>
                    </figure>
                </div>
            </section>

            {scModalOpen && (
                <div className="lightbox-overlay sc-modal-overlay" onClick={() => setScModalOpen(false)} role="dialog" aria-modal="true">
                    <div className="sc-modal-box" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={() => setScModalOpen(false)} aria-label="Fechar">
                            <i className="fa-solid fa-xmark" />
                        </button>
                        <iframe
                            title="SoundCloud Hypeer"
                            width="100%"
                            height="450"
                            scrolling="no"
                            frameBorder="no"
                            allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/hypeermusic&color=%23ff5500&auto_play=true&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
                        />
                    </div>
                </div>
            )}

            {lightboxSrc && (
                <div className="lightbox-overlay" onClick={closeLightbox} role="dialog" aria-modal="true">
                    <button className="lightbox-close" onClick={closeLightbox} aria-label="Fechar">
                        <i className="fa-solid fa-xmark" />
                    </button>
                    <img
                        className="lightbox-img"
                        src={lightboxSrc}
                        alt="Foto ampliada"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            <section className="download-wrap container">
                <a
                    className="cta cta-download"
                    href="https://drive.google.com/drive/folders/1rzcQBPVYb66EmEKISwX1uI9FStdZSVd8?usp=share_link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fa-solid fa-download" /> Baixar material do presskit
                </a>
                <div className="footer-logo-wrap">
                    <img src="/fotos/logo.png" alt="Logo Hypeer" className="footer-logo" />
                </div>
            </section>

            <div id="contato" />
        </main>
    );
};

export default Home;