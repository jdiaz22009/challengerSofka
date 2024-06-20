import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {useFormik} from 'formik';
import * as Yup from 'yup';
import {
  addYears,
  format,
  isAfter,
  isDate,
  isToday,
  isValid,
  parse,
} from 'date-fns';

import {Button, Header, Input} from '@/components/components';
import {addProduct} from '@/services/product';
import {IProduct} from '@/types/app';
import Loader from '@/components/shared/Loader/Loader';
import styles from './styles';

const initialValues: IProduct = {
  id: '',
  name: '',
  logo: '',
  description: '',
  date_release: format(new Date(), 'dd/MM/yyyy'),
  date_revision: '',
};

export const AddProductScreen = () => {
  const [showLoader, setShowLoader] = useState<boolean>(false);

  const FormSchema = Yup.object().shape({
    id: Yup.string().required('Id no valido'),
    name: Yup.string().required('Este campo es requerido'),
    logo: Yup.string().required('Este campo es requerido'),
    description: Yup.string().required('Este campo es requerido'),
    date_release: Yup.string().required('Este campo es requerido'),
  });

  const {
    handleSubmit,
    handleChange,
    touched,
    errors,
    resetForm,
    values,
    setFieldValue,
    setFieldError,
  } = useFormik({
    initialValues,
    validationSchema: FormSchema,
    onSubmit: (values: IProduct) => {
      const parseDate = parse(values.date_release, 'dd/MM/yyyy', new Date());
      console.log(values);
      handlerAdd({
        ...values,
        date_release: format(parseDate, 'yyyy-MM-dd'),
      });
    },
  });

  const handlerAdd = async (data: IProduct) => {
    try {
      setShowLoader(true);
      await addProduct(data);
      Alert.alert('Se ha enviado con exito');
      setShowLoader(false);
      resetForm();
    } catch (error) {
      setShowLoader(false);
      console.error(error);
    }
  };

  const handleDateReleaseChange = (value: string) => {
    setFieldValue('date_release', value);
    if (value) {
      try {
        const dateFormatsToTry = ['dd/MM/yyyy', 'yyyy-MM-dd', 'MM/dd/yyyy'];
        let parsedDate: Date | null = null;
        for (let formatString of dateFormatsToTry) {
          parsedDate = parse(value, formatString, new Date());
          if (isValid(parsedDate) && isDate(parsedDate)) {
            break;
          }
        }
        if (isValid(parsedDate) && isDate(parsedDate)) {
          const today = new Date();
          if (isToday(parsedDate) || isAfter(parsedDate, today)) {
            const dateRevision = addYears(parsedDate, 1);
            setFieldValue('date_revision', format(dateRevision, 'yyyy-MM-dd'));
          } else {
            setFieldError(
              'date_release',
              'La fecha debe ser igual o posterior a hoy',
            );
            setFieldValue('date_revision', '');
          }
        } else {
          setFieldValue('date_revision', '');
        }
      } catch (error) {
        setFieldValue('date_revision', '');
      }
    } else {
      setFieldValue('date_revision', '');
    }
  };

  return (
    <View style={styles.container}>
      {showLoader ? (
        <Loader show={showLoader} />
      ) : (
        <ScrollView>
          <View style={styles.space} />
          <Header title="Banco" />

          <View style={styles.space2} />

          <View style={styles.formContent}>
            <Text style={styles.title}>Formulario de registro</Text>
            <View style={styles.space2} />

            <Text style={styles.textInput}>ID</Text>
            <View style={styles.space3} />
            <Input
              styleInput={[styles.input, errors.id ? styles.borderError : null]}
              onChangeText={handleChange('id')}
              valueText={values.id}
            />

            {touched.id && errors.id && (
              <>
                <View style={styles.space3} />
                <Text style={styles.errorText}>{errors.id}</Text>
              </>
            )}

            <View style={styles.space3} />

            <Text style={styles.textInput}>Nombre</Text>
            <View style={styles.space3} />
            <Input
              styleInput={[
                styles.input,
                errors.name ? styles.borderError : null,
              ]}
              onChangeText={handleChange('name')}
              valueText={values.name}
            />

            {touched.name && errors.name && (
              <>
                <View style={styles.space3} />
                <Text style={styles.errorText}>{errors.name}</Text>
              </>
            )}

            <View style={styles.space3} />
            <Text style={styles.textInput}>Descripcion</Text>
            <View style={styles.space3} />
            <Input
              styleInput={[
                styles.input,
                errors.description ? styles.borderError : null,
              ]}
              onChangeText={handleChange('description')}
              valueText={values.description}
            />

            {touched.description && errors.description && (
              <>
                <View style={styles.space3} />
                <Text style={styles.errorText}>{errors.description}</Text>
              </>
            )}

            <View style={styles.space3} />
            <Text style={styles.textInput}>Logo</Text>
            <View style={styles.space3} />
            <Input
              styleInput={[
                styles.input,
                errors.logo ? styles.borderError : null,
              ]}
              onChangeText={handleChange('logo')}
              valueText={values.logo}
            />

            {touched.logo && errors.logo && (
              <>
                <View style={styles.space3} />
                <Text style={styles.errorText}>{errors.logo}</Text>
              </>
            )}

            <View style={styles.space3} />
            <Text style={styles.textInput}>Fecha Liberacion</Text>
            <View style={styles.space3} />
            <Input
              styleInput={[
                styles.input,
                errors.date_release ? styles.borderError : null,
              ]}
              onChangeText={handleDateReleaseChange}
              valueText={values.date_release}
            />

            {touched.date_release && errors.date_release && (
              <>
                <View style={styles.space3} />
                <Text style={styles.errorText}>{errors.date_release}</Text>
              </>
            )}

            <View style={styles.space3} />
            <Text style={styles.textInput}>Fecha Revision</Text>
            <View style={styles.space3} />
            <Input
              styleInput={[
                styles.input,
                errors.date_revision ? styles.borderError : null,
              ]}
              editable={true}
              valueText={
                values.date_revision !== '' &&
                format(values.date_revision, 'dd/MM/yyyy')
              }
            />
            {touched.date_revision && errors.date_revision && (
              <>
                <View style={styles.space3} />
                <Text style={styles.errorText}>{errors.date_revision}</Text>
              </>
            )}
          </View>

          <View style={styles.contentBtn}>
            <Button
              title="Enviar"
              onPress={handleSubmit}
              styleBtn={styles.btnSend}
              styleText={styles.btnTextSend}
            />
            <View style={styles.space3} />
            <Button
              title="Reiniciar"
              onPress={() => resetForm()}
              styleBtn={[styles.btnSend, styles.btnReset]}
              styleText={styles.btnTextSend}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
};
