import "./ExpeditionGallery.css";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import Image1 from "../../assets/images/climb-1.jpg";
import Image2 from "../../assets/images/climb-2.jpg";
import Image3 from "../../assets/images/climb-3.jpg";
import Image4 from "../../assets/images/climb-4.jpg";

const ExpeditionGallery = (props) => {
	return (
		<div className="gallery-container">
			<LightGallery plugins={[lgZoom]} mode="lg-fade">
				<a
					data-lg-size="1406-1390"
					className="gallery-item"
					data-src={Image1.src}
					data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
				>
					<img
						className="img-responsive"
						src={Image1.src}
					/>
				</a>
        <a
					data-lg-size="1406-1390"
					className="gallery-item"
					data-src={Image2.src}
					data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
				>
					<img
						className="img-responsive"
						src={Image2.src}
					/>
				</a>
        <a
					data-lg-size="1406-1390"
					className="gallery-item"
					data-src={Image3.src}
					data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
				>
					<img
						className="img-responsive"
						src={Image3.src}
					/>
				</a>
        <a
					data-lg-size="1406-1390"
					className="gallery-item"
					data-src={Image4.src}
					data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
				>
					<img
						className="img-responsive"
						src={Image4.src}
					/>
				</a>
				<a
					data-lg-size="1400-1400"
					data-pinterest-text="Shinimamiya, Osaka, Japan"
					data-tweet-text="Shinimamiya, Osaka, Japan"
					className="gallery-item"
					data-src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
					data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@asoshiation' >Shah </a></h4><p> Location - <a href='https://unsplash.com/s/photos/shinimamiya%2C-osaka%2C-japan'>Shinimamiya, Osaka, Japan</a></p>"
				>
					<img
						className="img-responsive"
						src={Image4.src}
					/>
				</a>
				<a
					data-lg-size="1400-1400"
					className="show-on-desktop gallery-item"
					data-src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
					data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
				>
					<img
						className="img-responsive"
						src={Image4.src}
					/>
				</a>
        <a
					data-lg-size="1406-1390"
					className="show-on-desktop gallery-item"
					data-src={Image1.src}
					data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
				>
					<img
						className="img-responsive"
						src={Image1.src}
					/>
				</a>
        <a
					data-lg-size="1406-1390"
					className="show-on-desktop gallery-item"
					data-src={Image2.src}
					data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
				>
					<img
						className="img-responsive"
						src={Image2.src}
					/>
				</a>
        <a
					data-lg-size="1406-1390"
					className="show-on-desktop gallery-item"
					data-src={Image3.src}
					data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
				>
					<img
						className="img-responsive"
						src={Image3.src}
					/>
				</a>
        <a
					data-lg-size="1406-1390"
					className="show-on-desktop gallery-item"
					data-src={Image4.src}
					data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
				>
					<img
						className="img-responsive"
						src={Image4.src}
					/>
				</a>
        <a
					data-lg-size="1406-1390"
					className="show-on-desktop gallery-item"
					data-src={Image2.src}
					data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
				>
					<img
						className="img-responsive"
						src={Image2.src}
					/>
				</a>
        <a
					data-lg-size="1406-1390"
					className="show-on-desktop gallery-item"
					data-src={Image1.src}
					data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
				>
					<img
						className="img-responsive"
						src={Image1.src}
					/>
				</a>
			</LightGallery>
		</div>
	);
};

export default ExpeditionGallery;
