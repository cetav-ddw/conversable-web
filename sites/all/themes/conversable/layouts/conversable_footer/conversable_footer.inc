<?php

/**
 * @file
 * Implementation of hook_panels_layouts().
 */
// Plugin definition.
$plugin = array(
  'title' => t('Footer'),
  'category' => t('Conversable'),
  'icon' => 'conversable_footer.png',
  'theme' => 'conversable_footer',
  'css' => 'conversable_footer.css',
  'regions' => array(
    'top' => t('Top'),
    'left_below' => t('Left below'),
    'right_below' => t('Right below'),
  ),
);
