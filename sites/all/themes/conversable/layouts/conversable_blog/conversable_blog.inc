<?php

/**
 * @file
 * Implementation of hook_panels_layouts().
 */
// Plugin definition.
$plugin = array(
  'title' => t('Blog'),
  'category' => t('Conversable'),
  'icon' => 'conversable_blog.png',
  'theme' => 'conversable_blog',
  'css' => 'conversable_blog.css',
  'regions' => array(
    'top' => t('Top'),
    'left_above' => t('Left above'),
    'right_above' => t('Right above'),
    'main' => t('Main'),
    'bottom' => t('Bottom'),
  ),
);
