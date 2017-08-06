<?php

/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.tpl.php template in this directory.
 *
 */
?>

<div class="wrapper">
  <header class="l-group site-header" role="banner"> 
    
    <?php if ($page['TopHeader']): ?>
      <div class="helper-nav">
        <?php print render($page['TopHeader']); ?>
      <!-- como meter el lenguaje switcher -->
      </div>
    <?php endif; ?>
           
    <?php if ($logo): ?>
      <div class="site-nav">
        <a href="<?php print $front_page; ?>" class="logo">
          <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>">
        </a>
      </div>
    <?php endif; ?>

    <?php print render($page['header']); ?>

  </header>

  <?php if ($page['content']): ?>
    <?php print render($page['content']); ?>
  <?php endif; ?>

  <footer class="l-group site-footer" role="contentinfo">
    <div class="group hello-friend">
      <?php print render($page['footer_top']); ?>
    </div>
    <div class="contact-footer">
      <?php print render($page['footer_bottom']); ?>
    </div>
  </footer>
</div>