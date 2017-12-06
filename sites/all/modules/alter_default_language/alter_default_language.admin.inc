<?php


/**
 * Settings form to alter_default_language module.
 */
function alter_default_language_settings_form() {

  $lan_list = language_list();

  $options = array();

  foreach ($lan_list as $key => $value) {
    $options[$key] = $value->native;
  }

  $form['alter_default_language_default_language'] = array(
    '#type' => 'select',
    '#title' => t('Default language'),
    '#options' => $options,
    '#default_value' => variable_get('alter_default_language_default_language', 'es'),
  );

  return system_settings_form($form);

}