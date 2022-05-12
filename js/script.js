$(function () {
	$(".cat-dropdown").click(function () {
		$(this).next(".cat-dropped").slideToggle(300);
	});
	$(".search-button").click(function () {
		$(".mobile-search-bar").fadeIn(300);
	});
	$(".search-close").click(function () {
		$(".mobile-search-bar").fadeOut(300);
	});
});

$(document).ready(function () {
	$('.tabs li').click(function () {
		var tab_id = $(this).attr('data-tab');
		$(this).closest(".tab-system").find("li").removeClass('current');
		$(this).closest(".tab-system").find(".tab-content").removeClass('current');
		$(this).addClass('current');
		$(this).closest(".tab-system").find("#" + tab_id).addClass('current');
	})
})

$(function () {
	$('.m-dropcol').click(function () {
		$('.user-dropdown').fadeToggle(280);
	});
});

$(function () {
	$('.ph-dropdown').click(function () {
		$('.ph-downrow').slideToggle(280);
	});
});

/* tab sistem */
$(function () {
	$('.items-filter').click(function () {
		var data_name = $(this).attr("data-name");

		$(this).closest(".itemss").find(".sitem").removeClass("hide");

		$(this).closest(".itemss").find("." + data_name).addClass("hide");

		$(this).closest(".itemss").find(".items-filter").removeClass('current');

		$(this).addClass('current');
	});
	$(".tum-ilanlar").click(function () {
		$(this).closest(".itemss").find(".sitem").removeClass("hide");
	})
});

/* Filtrele butonu */
$(function () {
	$('.ct-mob-menu').click(function () {
		$('.filter-mobile').addClass("active");
	});
	$('.ct-mob-close').click(function () {
		$('.filter-mobile').removeClass("active");
	});
});

$(document).ready(function () {
	$('.mobile-nav-section').click(function () {
		$('.mobile-nav-section').removeClass("active");
		$(this).addClass("active");
	});
});

let categoryListTimeout = null;
$(function () {
	$('#subcategory_holder *').on('mousemove', e => { e.stopPropagation() })

	$(document).on("mousemove", (e) => {
		const target = $(e.target);
		if (target.data().hasOwnProperty('categoryName') || target.attr('id') == 'subcategory_holder' || target.parents("#subcategory_holder").length > 0) {
			$('#subcategory_holder').css('opacity', 1);
			$('#subcategory_holder').css('pointer-events', 'unset');

			if (target.data('category-name')) {
				FillSubcategoryList(target.data('category-name'));
			}

			clearTimeout(categoryListTimeout);
		} else {
			clearTimeout(categoryListTimeout);
			categoryListTimeout = setTimeout(() => {
				$('#subcategory_holder').css('opacity', 0);
				$('#subcategory_holder').css('pointer-events', 'none');
				$(`[data-category-name]`).removeClass("active");
			}, 100);
		}
	});

	$('.carousel').carousel();

	const top_sellers = $("#top_sellers");
	const scrollAmount = top_sellers.find(".seller").width() + parseInt(top_sellers.css("gap").replace("px", ""));
	top_sellers.find(".fa-angle-left").on("click", () => {
		$("#top_sellers").animate({ scrollLeft: top_sellers.scrollLeft() - scrollAmount });
	});
	top_sellers.find(".fa-angle-right").on("click", () => {
		$("#top_sellers").animate({ scrollLeft: top_sellers.scrollLeft() + scrollAmount });
	});
});

// "Görmeye Değer" Kutucuğu
$(function () {
	const holder = $("#top_sellers");
	const prev_button = $("#top_sellers_controls .previous");
	const next_button = $("#top_sellers_controls .next");

	function ScrollBy(itemCount) {
		const itemWidth = holder.find(".seller")[0].scrollWidth;
		const gap = parseInt(holder.css("gap").replace("px", ""));
		const scrollBy = (itemWidth + (gap * itemCount * 0.5)) * itemCount;
		holder.css("scroll-snap-type", "unset");
		holder.animate({ scrollLeft: "+=" + scrollBy }, 400);
		setTimeout(() => { holder.css("scroll-snap-type", "x mandatory"); }, 400);
	}

	next_button.on("click", () => { ScrollBy(1) });
	prev_button.on("click", () => { ScrollBy(-1) });
});

const subcategories = {
	"find-in-map": [
		{ text: "Otomobil", link: "#" },
		{ text: "Arazi, Suv & Pickup", link: "#" },
		{ text: "Motosiklet", link: "#" },
		{ text: "Minivan & Panelvan", link: "#" },
		{ text: "Ticari Araçlar", link: "#" },
		{ text: "Kiralık Araçlar", link: "#" },
		{ text: "Hasarlı Araçlar", link: "#" },
		{ text: "Yabancıdan Yabancıya Satış", link: "#" },
		{ text: "Elektrikli Araçlar", link: "#" },
	],
	"share-room": [
		{ text: "Otomobil", link: "#" },
		{ text: "Arazi, Suv & Pickup", link: "#" },
		{ text: "Motosiklet", link: "#" },
		{ text: "Minivan & Panelvan", link: "#" },
		{ text: "Ticari Araçlar", link: "#" },
		{ text: "Kiralık Araçlar", link: "#" },
		{ text: "Hasarlı Araçlar", link: "#" },
		{ text: "Yabancıdan Yabancıya Satış", link: "#" },
		{ text: "Elektrikli Araçlar", link: "#" },
	],
	"first-home": [
		{ text: "Otomobil", link: "#" },
		{ text: "Arazi, Suv & Pickup", link: "#" },
		{ text: "Motosiklet", link: "#" },
		{ text: "Minivan & Panelvan", link: "#" },
		{ text: "Ticari Araçlar", link: "#" },
		{ text: "Kiralık Araçlar", link: "#" },
		{ text: "Hasarlı Araçlar", link: "#" },
		{ text: "Yabancıdan Yabancıya Satış", link: "#" },
		{ text: "Elektrikli Araçlar", link: "#" },
	],
	"first-car": [
		{ text: "Otomobil", link: "#" },
		{ text: "Arazi, Suv & Pickup", link: "#" },
		{ text: "Motosiklet", link: "#" },
		{ text: "Minivan & Panelvan", link: "#" },
		{ text: "Ticari Araçlar", link: "#" },
		{ text: "Kiralık Araçlar", link: "#" },
		{ text: "Hasarlı Araçlar", link: "#" },
		{ text: "Yabancıdan Yabancıya Satış", link: "#" },
		{ text: "Elektrikli Araçlar", link: "#" },
	],
	"carpark": [
		{ text: "Otomobil", link: "#" },
		{ text: "Arazi, Suv & Pickup", link: "#" },
		{ text: "Motosiklet", link: "#" },
		{ text: "Minivan & Panelvan", link: "#" },
		{ text: "Ticari Araçlar", link: "#" },
		{ text: "Kiralık Araçlar", link: "#" },
		{ text: "Hasarlı Araçlar", link: "#" },
		{ text: "Yabancıdan Yabancıya Satış", link: "#" },
		{ text: "Elektrikli Araçlar", link: "#" },
	],
	"flat-for-flat": [
		{ text: "Otomobil", link: "#" },
		{ text: "Arazi, Suv & Pickup", link: "#" },
		{ text: "Motosiklet", link: "#" },
		{ text: "Minivan & Panelvan", link: "#" },
		{ text: "Ticari Araçlar", link: "#" },
		{ text: "Kiralık Araçlar", link: "#" },
		{ text: "Hasarlı Araçlar", link: "#" },
		{ text: "Yabancıdan Yabancıya Satış", link: "#" },
		{ text: "Elektrikli Araçlar", link: "#" },
	],
	"real-estate": [
		{ text: "Yaşam Alanı", link: "#" },
		{ text: "İşyeri", link: "#" },
		{ text: "Arsa", link: "#" },
		{ text: "Tüm Bina", link: "#" },
		{ text: "Kat Karşılığı", link: "#" },
		{ text: "Turistik Tesis", link: "#" },
		{ text: "Devremülk", link: "#" },
	],
	"titiz-car": [
		{ text: "Otomobil", link: "#" },
		{ text: "Arazi, Suv & Pickup", link: "#" },
		{ text: "Motosiklet", link: "#" },
		{ text: "Minivan & Panelvan", link: "#" },
		{ text: "Ticari Araçlar", link: "#" },
		{ text: "Kiralık Araçlar", link: "#" },
		{ text: "Hasarlı Araçlar", link: "#" },
		{ text: "Yabancıdan Yabancıya Satış", link: "#" },
		{ text: "Elektrikli Araçlar", link: "#" },
	],
	"titiz-worker": [
		{ text: "Otomobil", link: "#" },
		{ text: "Arazi, Suv & Pickup", link: "#" },
		{ text: "Motosiklet", link: "#" },
		{ text: "Minivan & Panelvan", link: "#" },
		{ text: "Ticari Araçlar", link: "#" },
		{ text: "Kiralık Araçlar", link: "#" },
		{ text: "Hasarlı Araçlar", link: "#" },
		{ text: "Yabancıdan Yabancıya Satış", link: "#" },
		{ text: "Elektrikli Araçlar", link: "#" },
	],
	"second-hand": [
		{ text: "Bilgisayar", link: "#" },
		{ text: "Cep Telefonu", link: "#" },
		{ text: "Fotoğraf & Kamera", link: "#" },
		{ text: "Ev Dekorasyon", link: "#" },
		{ text: "Ev Elektroniği", link: "#" },
		{ text: "Elektrikli Ev Aletleri", link: "#" },
		{ text: "Giyim & Aksesuar", link: "#" },
		{ text: "Saat", link: "#" },
	],
	"post-earthquake": [
		{ text: "Otomobil", link: "#" },
		{ text: "Arazi, Suv & Pickup", link: "#" },
		{ text: "Motosiklet", link: "#" },
		{ text: "Minivan & Panelvan", link: "#" },
		{ text: "Ticari Araçlar", link: "#" },
		{ text: "Kiralık Araçlar", link: "#" },
		{ text: "Hasarlı Araçlar", link: "#" },
		{ text: "Yabancıdan Yabancıya Satış", link: "#" },
		{ text: "Elektrikli Araçlar", link: "#" },
	],
	"pet": [
		{ text: "Otomobil", link: "#" },
		{ text: "Arazi, Suv & Pickup", link: "#" },
		{ text: "Motosiklet", link: "#" },
		{ text: "Minivan & Panelvan", link: "#" },
		{ text: "Ticari Araçlar", link: "#" },
		{ text: "Kiralık Araçlar", link: "#" },
		{ text: "Hasarlı Araçlar", link: "#" },
		{ text: "Yabancıdan Yabancıya Satış", link: "#" },
		{ text: "Elektrikli Araçlar", link: "#" },
	],
}

let activeCategoryName = null;
function FillSubcategoryList(categoryName) {
	if (activeCategoryName != categoryName) {
		const _subcategories = subcategories[categoryName];
		if (_subcategories && _subcategories.length > 0) {
			$("#subcategory_holder").html(_subcategories.map(data => `
				<a href="${data.link}">${data.text}</a>
			`));
		}
		activeCategoryName = categoryName;
		$(`[data-category-name]`).removeClass("active");
		$(`[data-category-name=${categoryName}]`).addClass("active");
	}
}

Vue.createApp({
	data() {
		return {
			slides: [
				"https://a.allegroimg.com/original/1218c3/c33628954480bec6f77fac5ba17d",
				"https://a.allegroimg.com/original/121509/971ba3c24d469c17047a5ee767ee",
				"https://a.allegroimg.com/original/12ddba/c2f4041645ba9936376aad850f21",
				"https://a.allegroimg.com/original/122776/72f1d3c140d58bc2f63564bccc1d",
			],
			slideIndex: 0,
			timeout: null,
		}
	},
	mounted() {
		this.timeout = setInterval(() => {
			this.slideIndex = this.slideIndex >= this.slides.length - 1 ? 0 : this.slideIndex + 1
		}, 7500);
	}
}).mount('#top_carousel');

Vue.createApp({
	data() {
		return {
			sellers: [
				{ name: "Ücretsiz Teslimat", image: "https://a.allegroimg.com/original/127691/6eace0094a379a210653e8fde78e" },
				{ name: "Kadınlar Günü Hediyeleri", image: "https://a.allegroimg.com/original/1210f3/0e6c992d436b94b6f228688f5bb6" },
				{ name: "İndirimli Moda", image: "https://a.allegroimg.com/original/12247d/624e11b143afab02ea330adf743e" },
				{ name: "Sağlık Fırsatları", image: "https://a.allegroimg.com/original/128b44/447224c64852a54935e3b31f1bb1" },
				{ name: "Karnaval Hitleri", image: "https://a.allegroimg.com/original/1245af/f68195bd4d2dac3fabd156980e07" },
				{ name: "Ücretsiz Teslimat", image: "https://a.allegroimg.com/original/127691/6eace0094a379a210653e8fde78e" },
				{ name: "Kadınlar Günü Hediyeleri", image: "https://a.allegroimg.com/original/1210f3/0e6c992d436b94b6f228688f5bb6" },
				{ name: "İndirimli Moda", image: "https://a.allegroimg.com/original/12247d/624e11b143afab02ea330adf743e" },
				{ name: "Sağlık Fırsatları", image: "https://a.allegroimg.com/original/128b44/447224c64852a54935e3b31f1bb1" },
				{ name: "Karnaval Hitleri", image: "https://a.allegroimg.com/original/1245af/f68195bd4d2dac3fabd156980e07" },
			],
		}
	}
}).mount('#top_sellers_holder');

$(() => {
	PositionTopSellers();
	$(window).on("resize", PositionTopSellers);

	function PositionTopSellers() {
		if (window.innerWidth <= 900) {
			$("#top_sellers_holder").insertAfter($(".main-category .special-category"));
		} else {
			$("#top_sellers_holder").insertAfter($("#top_carousel"));
		}
	}
});

$(() => {
	$(".category-real .cat-h").on("click", e => {
		e.preventDefault();
		const target = $(e.target).closest(".cat-h");
		const categoryName = target.data("categoryName");

		ShowSubcategories(true);

		const _subcategories = subcategories[categoryName];
		if (_subcategories && _subcategories.length > 0) {
			$("#subcategories_mobile .content").html(
				_subcategories.map(data => `<a href="${data.link}">${data.text}</a>`)
			);
		}
	});

	let startPosition = null;
	let diff = null;
	$("#subcategories_mobile").on("touchstart", e => {
		startPosition = e.originalEvent.touches[0].pageX;
	})
	$("#subcategories_mobile").on("touchmove", e => {
		e.preventDefault();
		const currentPosition = e.originalEvent.touches[0].pageX;
		diff = currentPosition - startPosition;
		$("#subcategories_mobile").css({ left: diff })
	})
	$("#subcategories_mobile").on("touchend", () => {
		if (diff > 150) {
			ShowSubcategories(false);
		} else {
			ShowSubcategories(true);
		}
	});

	function ShowSubcategories(show) {
		$("#subcategories_mobile").css("display", show ? "block" : "none");
		$("#subcategories_mobile").animate({ left: show ? "0" : "100%" });
		window.scrollTo(0, 0);
	}
});