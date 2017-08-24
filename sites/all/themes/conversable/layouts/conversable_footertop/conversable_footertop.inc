<?php

/**
 * @file
 * Implementation of hook_panels_layouts().
 */
// Plugin definition.
$plugin = array(
  'title' => t('Footer Top'),
  'category' => t('Conversable'),
  'icon' => 'conversable_footertop.png',
  'theme' => 'conversable_footertop',
  'css' => 'conversable_footertop.css',
  'regions' => array(
    'main' => t('Main'),
  ),
);
