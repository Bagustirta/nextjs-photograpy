export default function ProjectPage() {
	return (
    <>
    <body>

    <div className="uk-position-relative">
                <div className="uk-height-viewport gambar uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" uk-height-viewport="true" >
                    
                </div>
             
                <div className="uk-position-top">
                    <nav className="uk-navbar-container uk-navbar-transparent uk-navbar" uk-navbar="true">

                            <img src="2.png" alt="" width="90px" ></img>

                        <div className="uk-navbar-right">
                            <ul className="uk-navbar-nav uk-light">
                                <li><a href="/">Home</a></li>
                                <li><a href="/project">Project</a></li>
                                <li><a href="/about">About</a></li>
                            </ul>                
                               
                        </div>
                    </nav>
            
            </div>
            <div className="uk-position-center  uk-text-center uk-light">
            <div className="uk-light uk-text-underline uk-padding uk-flex uk-flex-center uk-container">
        <h2>Portofolio</h2>
    </div>
    <div className="uk-container">
            <div className="uk-grid uk-grid-stack uk-padding" uk-grid="true">
                <div className="uk-width-1-4">
                    <div className=" uk-card uk-card-default">
                        <div className="uk-card-media-top">
                                <img src="pj1.jpg" alt=""></img>
                        </div>
                           
                    </div>
                </div>

                <div className="uk-width-1-4">
                    <div className=" uk-card uk-card-default">
                        <div className="uk-card-media-top">
                                <img src="pj2.jpg" alt=""></img>
                        </div>
                           
                    </div>
                </div>

                <div className="uk-width-1-4">
                    <div className=" uk-card uk-card-default">
                        <div className="uk-card-media-top">
                                <img src="pj3.jpg" alt=""></img>
                        </div>
                           
                    </div>
                </div>

                <div className="uk-width-1-4">
                    <div className=" uk-card uk-card-default">
                        <div className="uk-card-media-top">
                                <img src="pj4.jpg" alt=""></img>
                        </div>
                           
                    </div>
                </div>

                <p className="uk-align-center" uk-margin>
    <button className="uk-button uk-button-default">See All Project</button>
</p>
            </div>        
            
            <div className=" uk-light">
        <div className="uk-align-left">
            <p className="uk-align-left">CopyRight@2021</p>
        </div>
        <div className="uk-align-right">
            <a href="https://www.instagram.com/bagustirta_" className=" uk-icon-button uk-margin-small-right"
                    uk-icon="instagram"></a>
                <a href="https://www.facebook.com?Bagus Tirta" className=" uk-icon-button  uk-margin-small-right"
                    uk-icon="facebook"></a>
                <a href="https://api.whatsapp.com/send?phone=+6281913842931&text=Nomor Wa Gua Nih Boss!!"
                    className=" uk-icon-button uk-margin-small-right" uk-icon="whatsapp"></a>
        </div>
            </div>
            </div>
            </div>
                
   

    
    </div>

           
            
                    
               


    </body>
    </>
	);
}
