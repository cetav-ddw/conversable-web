<?php

/**
 * @file
 * Implementation of hook_panels_layouts().
 */
// Plugin definition.
$plugin = array(
  'title' => t('Blog Post'),
  'category' => t('Conversable'),
  'icon' => 'conversable_blogpost.png',
  'theme' => 'conversable_blogpost',
  'css' => 'conversable_blogpost.css',
  'regions' => array(
    'main' => t('Main'),
    'bottom' => t('Bottom'),
  ),
);
