<?php

/**
 * @file
 * Implementation of hook_panels_layouts().
 */
// Plugin definition.
$plugin = array(
  'title' => t('One page conversable'),
  'category' => t('Conversable'),
  'icon' => 'conversable_onepage.png',
  'theme' => 'conversable_onepage',
  'css' => 'conversable_onepage.css',
  'regions' => array(
    'top' => t('Top'),
    'main' => t('Main'),
    'middle_above' => t('Middle above'),
    'middle' => t('Middle'),
    'middle_below' => t('Middle below'),
    'bottom' => t('Bottom'),
  ),
);
