<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1" name="viewport" />
<title>Capcium</title>

<link rel="shortcut icon" href="assets/images/favicon.png"/>

<link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700|Raleway:600" rel="stylesheet">
<link rel="stylesheet" href="style.css">

</head>

<body>

	<?php include_once("modules/header.php"); ?>

	<div id="wrapper">
		<!-- HERO -->
		<section class="inner-header" id="page-news">
			<div class="inner-header-content">
				<h1>Newsroom</h1>
				<h4>News, PR & Events</h4>
			</div>
			<div id="hero-gradient-top"></div>
			<div id="hero-fluid-bottom"><img src="assets/images/hero-internal-bottom.svg"></div>
		</section>

		<a href="#sec-first-content" id="btn-down-internal" class="scroll"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 34 34" style="enable-background:new 0 0 34 34;" xml:space="preserve"><path d="M17,29.56c-0.54,0-1.08-0.21-1.49-0.62L0.62,14.05c-0.83-0.82-0.83-2.16,0-2.99c0.82-0.83,2.16-0.83,2.99,0L17,24.46l13.39-13.39c0.83-0.83,2.16-0.83,2.99,0c0.83,0.82,0.83,2.16,0,2.99L18.49,28.94C18.08,29.35,17.54,29.56,17,29.56z"/></svg></a>

		<!-- Content -->
		<section class="content" id="sec-first-content">
			<div class="content-wrapper">
				<div class="full-wrap">
					<div class="news-filters-wrap">
						<div class="news-search">
							<form id="news-search-form">
								<input type="text" placeholder="I'm looking for"><input type="submit" value="Search">
							</form>
						</div>
						<div class="news-filters">
							<ul>
								<li><a href="javascript:void(0);">News</a></li>
								<li><a href="javascript:void(0);">Events</a></li>
								<li><a href="javascript:void(0);">Press Releases</a></li>
							</ul>
						</div>
					</div>
					<div class="news-wrap">
						<a href="article.php" class="news-article">
							<div class="news-thumb">
								<div class="news-type">News</div>
								<div class="news-thumb-image">
									<img src="assets/images/-placeholders/img-example-square.png" alt="Article title">
								</div>
							</div>
							<div class="news-content">
								<h2>News title lorem ipsum dolor vitae est tincidunt, lacinia diam nec, tempor ipsum.</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet...</p>
								<p class="news-btn-continue-reading">Continue reading</p>
							</div>
						</a>
						<a href="article.php" class="news-article">
							<div class="news-thumb">
								<div class="news-type">News</div>
								<div class="news-thumb-image">
									<img src="assets/images/-placeholders/img-example-square.png" alt="Article title">
								</div>
							</div>
							<div class="news-content">
								<h2>News title lorem ipsum dolor vitae est tincidunt, lacinia diam nec, tempor ipsum.</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet...</p>
								<p class="news-btn-continue-reading">Continue reading</p>
							</div>
						</a>
						<a href="article.php" class="news-article">
							<div class="news-thumb">
								<div class="news-type">Press Release</div>
								<div class="news-thumb-image">
									<img src="assets/images/-placeholders/img-example-square.png" alt="Article title">
								</div>
							</div>
							<div class="news-content">
								<h2>News title lorem ipsum dolor vitae est tincidunt, lacinia diam nec, tempor ipsum.</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet...</p>
								<p class="news-btn-continue-reading">Continue reading</p>
							</div>
						</a>
						<a href="article.php" class="news-article">
							<div class="news-thumb">
								<div class="news-type">News</div>
								<div class="news-thumb-image">
									<img src="assets/images/-placeholders/img-example-square.png" alt="Article title">
								</div>
							</div>
							<div class="news-content">
								<h2>News title lorem ipsum dolor vitae est tincidunt, lacinia diam nec, tempor ipsum.</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet...</p>
								<p class="news-btn-continue-reading">Continue reading</p>
							</div>
						</a>
						<a href="article.php" class="news-article">
							<div class="news-thumb">
								<div class="news-type">Events</div>
								<div class="news-thumb-image">
									<img src="assets/images/-placeholders/img-example-square.png" alt="Article title">
								</div>
							</div>
							<div class="news-content">
								<h2>News title lorem ipsum dolor vitae est tincidunt, lacinia diam nec, tempor ipsum.</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet...</p>
								<p class="news-btn-continue-reading">Continue reading</p>
							</div>
						</a>

						<div class="news-pagination">
							<a href="javascript:void(0);" class="btn-pag">Previous</a>
							<a href="javascript:void(0);">1</a>
							<a href="javascript:void(0);">2</a>
							<a href="javascript:void(0);">3</a>
							<a href="javascript:void(0);" class="btn-pag">Next</a>
						</div>
					</div>
				</div>
			</div>

		</section>
	</div>

	<?php include_once("modules/footer.php"); ?>

</body>
</html>