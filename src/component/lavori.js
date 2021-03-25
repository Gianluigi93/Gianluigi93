import '../base.css';
import React, { Component } from 'react'

class Lavori extends React.Component{
    render() {
        return (
            <div class="sezione" id="due" data-color="orange-light">
                <div class="inner-section">
                    <h2 class="section-title">i miei lavori</h2>
				</div>
                    <div class="grid">
						<div class="grid__item grid__item--bg theme-1">
							<div class="grid__item-img" data-displacement="img/displacement/8.jpg" data-intensity="-0.65" data-speedIn="1.2" data-speedOut="1.2">
							</div>
							<div class="grid__item-content">
								<span class="grid__item-meta">Web Design</span>
								<h2 class="grid__item-title">Andrea Nonni</h2>
								<h3 class="grid__item-subtitle">
									<span>Portfolio</span>
									<a class="grid__item-link" href="#">Scopri di più</a>
								</h3>
							</div>
						</div>
						<div class="grid__item grid__item--bg theme-2">
							<div class="grid__item-img" data-displacement="img/displacement/4.png" data-intensity="0.2" data-speedIn="1.6" data-speedOut="1.6">
							</div>
							<div class="grid__item-content">
								<span class="grid__item-meta">UI Web Design</span>
								<h2 class="grid__item-title">Advertoo</h2>
								<h3 class="grid__item-subtitle">
									<span>Agenzia di marketing</span>
									<a class="grid__item-link" href="#">Scopri di più</a>
								</h3>
							</div>
						</div>
						<div class="grid__item grid__item--bg theme-3">
							<div class="grid__item-img" data-displacement="img/displacement/4.png" data-intensity="0.2" data-speedIn="1.6" data-speedOut="1.6">
							</div>
							<div class="grid__item-content">
								<span class="grid__item-meta">UX e Prototipazione</span>
								<h2 class="grid__item-title">Renovars</h2>
								<h3 class="grid__item-subtitle">
									<span>Holding leader nel settore della ristrutturazione in Italia</span>
									<a class="grid__item-link" href="#">Scopri di più</a>
								</h3>
							</div>
						</div>
						<div class="grid__item grid__item--bg theme-4">
							<div class="grid__item-img" data-displacement="img/displacement/4.png" data-intensity="0.2" data-speedIn="1.6" data-speedOut="1.6">
							</div>
							<div class="grid__item-content">
								<span class="grid__item-meta">UX e Prototipazione</span>
								<h2 class="grid__item-title">Serramenti</h2>
								<h3 class="grid__item-subtitle">
									<span>Azienda Leader per la fornitura di serramenti, porte, infissi, scale e finestre</span>
									<a class="grid__item-link" href="#">Scopri di più</a>
								</h3>
							</div>
						</div>
						<div class="grid__item grid__item--bg theme-5">
							<div class="grid__item-img" data-displacement="img/displacement/4.png" data-intensity="0.2" data-speedIn="1.6" data-speedOut="1.6">
							</div>
							<div class="grid__item-content">
								<span class="grid__item-meta">UX UI Web Development</span>
								<h2 class="grid__item-title">EPLS</h2>
								<h3 class="grid__item-subtitle">
									<span>Enterprise Lenguage Service</span>
									<a class="grid__item-link" href="#">Scopri di più</a>
								</h3>
							</div>
						</div>
						<div class="grid__item grid__item--bg theme-6">
							<div class="grid__item-img" data-displacement="img/displacement/1.jpg" data-intensity="-0.4" data-speedIn="0.7" data-speedOut="0.3" data-easing="Sine.easeOut">
							</div>
							<div class="grid__item-content">
								<span class="grid__item-meta">Web Design e Development</span>
								<h2 class="grid__item-title">MGS Consulenti</h2>
								<h3 class="grid__item-subtitle">
									<span>Società di consulenza</span>
									<a class="grid__item-link" href="#">Scopri di più</a>
								</h3>
							</div>
						</div>
						<div class="grid__item grid__item--bg theme-7">
							<div class="grid__item-content">
								<span class="grid__item-meta">UX - UI - Web Development</span>
								<h2 class="grid__item-title">SIDeMaST 2021</h2>
								<h3 class="grid__item-subtitle">
									<span>Evento</span>
									<a class="grid__item-link" href="#">Scopri di più</a>
								</h3>
							</div>
						</div>
						<div class="grid__item grid__item--bg theme-8">
							<div class="grid__item-content">
								<span class="grid__item-meta">UX - UI - Web Development</span>
								<h2 class="grid__item-title">Il Borgo delle querce</h2>
								<h3 class="grid__item-subtitle">
									<span>Rifugio di pace e tranquillità situato nell’incantevole paesaggio della Valle D’Itria</span>
									<a class="grid__item-link" href="#">Scopri di più</a>
								</h3>
							</div>
						</div>
					</div>
                </div>
        )
}
}

export default Lavori;