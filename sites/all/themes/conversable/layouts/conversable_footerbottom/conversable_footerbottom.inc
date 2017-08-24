<?php

/**
 * @file
 * Implementation of hook_panels_layouts().
 */
// Plugin definition.
$plugin = array(
  'title' => t('Footer Bottom'),
  'category' => t('Conversable'),
  'icon' => 'conversable_footerbottom.png',
  'theme' => 'conversable_footerbottom',
  'css' => 'conversable_footerbottom.css',
  'regions' => array(
    'left' => t('Left'),
    'right' => t('Right'),
  ),
);
