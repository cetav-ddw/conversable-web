<?php

/**
 * @file
 * Implementation of hook_panels_layouts().
 */
// Plugin definition.
$plugin = array(
  'title' => t('Why conversable'),
  'category' => t('Conversable'),
  'icon' => 'conversable_whyconversable.png',
  'theme' => 'conversable_whyconversable',
  'css' => 'conversable_whyconversable.css',
  'regions' => array(
    'top' => t('Top'),
    'main' => t('Main'),
    'middle_above' => t('Middle above'),
    'middle' => t('Middle'),
    'middle_below' => t('Middle below'),
    'bottom' => t('Bottom'),
  ),
);
