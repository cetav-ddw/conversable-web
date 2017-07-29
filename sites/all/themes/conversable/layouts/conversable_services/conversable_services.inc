<?php

/**
 * @file
 * Implementation of hook_panels_layouts().
 */
// Plugin definition.
$plugin = array(
  'title' => t('Services conversable'),
  'category' => t('Conversable'),
  'icon' => 'conversable_services.png',
  'theme' => 'conversable_services',
  'css' => 'conversable_services.css',
  'regions' => array(
    'top' => t('Top'),
    'main' => t('Main'),
    'first_wide' => t('First wide'),
    'second_wide' => t('Second wide'),
    'third_wide' => t('Third wide'),
    'fourth_wide' => t('Fourth wide'),
    'fifth_wide' => t('Fifth wide'),
    'bottom' => t('Bottom'),
  ),
);
