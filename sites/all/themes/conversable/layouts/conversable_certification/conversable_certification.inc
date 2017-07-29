<?php

/**
 * @file
 * Implementation of hook_panels_layouts().
 */
// Plugin definition.
$plugin = array(
  'title' => t('Certification conversable'),
  'category' => t('Conversable'),
  'icon' => 'conversable_certification.png',
  'theme' => 'conversable_certification',
  'css' => 'conversable_certification.css',
  'regions' => array(
    'top' => t('Top'),
    'main' => t('Main'),
    'middle' => t('Middle'),
    'bottom' => t('Bottom'),
  ),
);
