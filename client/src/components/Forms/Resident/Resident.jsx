import React, { useContext, useEffect, useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { useForm } from "react-hook-form";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";
import cn from "classnames";
import { format } from "date-fns";
import { createResident } from "../../../api/resident";
import { Bubble } from "../../Bubble";
import MyContext from "../../../context/Base/AppContext";
import HookInput from "../../Input/HookInput";
import Button from "../../Button/Button";
import validators from "../../../utils/validators";
import Confirm from "../../ConfirmMessage/Confirm";
import FormBlock from "../UserForm/FormBlock";
import MobileUserForm from "../UserForm/MobileUserForm";

const defaultMaterialTheme = createMuiTheme({
  palette: {
    main: indigo[900],
  },
});

// eslint-disable-next-line react/prop-types
export default function Resident({ getBack }) {
  const { t } = useTranslation();

  const headerText = t("form.beResident");
  const mainText = (
    <Trans i18nKey="form.residentText">
      <span className="bold" />
    </Trans>
  );
  const inputData = [
    {
      id: "name",
      placeholder: t("form.placeholders.fullName"),
      autocomplete: "off",
      type: "text",
    },
    {
      id: "birth",
      placeholder: t("form.placeholders.birth"),
      type: "date",
      autocomplete: "off",
      validate: validators.birth,
      hint: t("form.placeholders.hintBirth"),
    },
    {
      id: "phone",
      placeholder: t("form.placeholders.phone"),
      autocomplete: "off",
      type: "number",
    },
    {
      id: "email",
      placeholder: t("form.placeholders.email"),
      type: "email",
      validate: validators.email,
    },
    {
      id: "information",
      placeholder: t("form.placeholders.informationResident"),
      hint: t("form.placeholders.hintResident"),
      autocomplete: "off",
      type: "text",
    },
  ];
  const [isLoading, setLoading] = useState(false);
  const [sended, setSended] = useState(false);
  const { isLightTheme, setLightTheme, hiddenSidebars, setHiddenSidebars, isNavOpened, setIsNavOpened } = useContext(
    MyContext,
  );
  const [step, setStep] = useState(0);

  useEffect(() => {
    setLightTheme(true);
    setIsNavOpened(false);
    setHiddenSidebars(true);
    return () => {
      setLightTheme(false);
      setHiddenSidebars(false);
    };
  }, [isLightTheme, isNavOpened, hiddenSidebars]);
  const [date, setDate] = useState(null);
  const confirmMessage = (
    <Trans i18nKey="form.residentConfirmText">
      <p />
      <p />
      <p />
    </Trans>
  );

  const submitForm = async (data) => {
    try {
      setLoading(true);
      await createResident({ ...data, birth: format(data.birth, "dd/MM/yyyy") });
      setLoading(false);
      setSended(true);
    } catch (e) {
      setLoading(false);
      getBack();
    }
  };

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm();

  useEffect(() => {
    register("birth", {
      required: true,
    });
  }, [register]);
  return (
    <section className="form-container">
      <Bubble big animate style={{ bottom: 453, left: 451 }} />
      <Bubble
        middle
        animate
        style={{
          bottom: 240,
          left: "34vw",
          opacity: 1,
        }}
      />
      <Bubble small animate style={{ top: 50, left: 151, opacity: 0.2 }} />
      <form className="form-resident" onSubmit={handleSubmit(submitForm)}>
        <div className="main-form-container">
          <div className="form-request">
            <FormBlock mainText={mainText} headerText={headerText} />
            {!sended ? (
              <div className="form-main">
                <div className="form-registration">
                  <div className="form-block">
                    <HookInput
                      {...register("name", { required: true })}
                      placeholder={t("form.placeholders.fullName")}
                      error={errors.name}
                    />
                  </div>

                  <div className="form-block">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <ThemeProvider theme={defaultMaterialTheme}>
                        <DatePicker
                          className="custom-datepicker"
                          disableFuture
                          inputProps={{ className: cn({ error: errors.birth }) }}
                          openTo="year"
                          format="dd/MM/yyyy"
                          placeholder={t("form.placeholders.birth")}
                          views={["year", "month", "date"]}
                          value={date}
                          onChange={(innerDate, e) => {
                            setDate(innerDate);
                            setValue("birth", innerDate, { shouldValidate: true, shouldDirty: true });
                          }}
                        />
                      </ThemeProvider>
                    </MuiPickersUtilsProvider>
                  </div>

                  <div className="form-block">
                    <HookInput
                      {...register("phone", { required: true, pattern: /[0-9*]/i })}
                      placeholder={t("form.placeholders.phone")}
                      type={"number"}
                      error={errors.phone}
                    />
                  </div>
                  <div className="form-block">
                    <HookInput
                      {...register("email", {
                        required: true,
                        pattern: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+).([a-zA-Z]{2,5})$/,
                      })}
                      placeholder={t("form.placeholders.email")}
                      type={"email"}
                      error={errors.email}
                    />
                  </div>
                  <div className="form-block">
                    <HookInput
                      {...register("information", {
                        required: true,
                      })}
                      placeholder={t("form.placeholders.informationResident")}
                      hint={t("form.placeholders.hintResident")}
                      error={errors.information}
                    />
                  </div>
                  <div className="request-button-block">
                    <Button type="submit" className="btn btn-support btn-request" loading={isLoading}>
                      {t("join")}
                    </Button>
                  </div>
                </div>
              </div>
            ) : null}
            {sended ? <Confirm confirmMessage={confirmMessage} /> : null}
          </div>
          <div className="atom-logo" />
          <div className="close-dialog-btn" onClick={getBack} />
          <div className="nav_toggle arrow" onClick={getBack} />
          <MobileUserForm
            step={step}
            setStep={setStep}
            inputData={inputData}
            sended={sended}
            confirmMessage={confirmMessage}
            mainText={mainText}
            createOrder={createResident}
            getBack={getBack}
            headerText={headerText}
            submitForm={submitForm}
            isLoading={isLoading}
          />
        </div>
      </form>
    </section>
  );
}
