<?php

/**
 * @file
 * Implementation of hook_panels_layouts().
 */
// Plugin definition.
$plugin = array(
  'title' => t('Article conversable'),
  'category' => t('Conversable'),
  'icon' => 'conversable_article.png',
  'theme' => 'conversable_article',
  'css' => 'conversable_article.css',
  'regions' => array(
    'top' => t('Top'),
    'main' => t('Main'),
    'bottom' => t('Bottom'),
  ),
);
