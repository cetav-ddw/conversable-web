<?php

/**
 * @file
 * Implementation of hook_panels_layouts().
 */
// Plugin definition.
$plugin = array(
  'title' => t('Form conversable'),
  'category' => t('Conversable'),
  'icon' => 'conversable_form.png',
  'theme' => 'conversable_form',
  'css' => 'conversable_form.css',
  'regions' => array(
    'single_wide' => t('Single wide'),
    'right_wide' => t('Right wide'),
  ),
);
