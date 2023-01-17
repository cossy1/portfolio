import React from "react";
import styled from "styled-components";
import { ColorConstants } from "@/styles/colorConstants";
import { Card, Space } from "antd";
import Image from "next/image";

const StyledSkills = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: ${ColorConstants.white};
    font-size: 64px;
    font-weight: 700;
    margin: 40px 0;
    text-align: center;
  }

  .cards {
    display: flex;
    align-items: start;
    justify-content: space-between;
    margin: 0 auto;
    gap: 20px;
    width: 70%;
    text-align: center;
    font-weight: 700;
    flex-wrap: wrap;
    font-size: 20px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .cards {
      width: 90%;
    }
  }

  @media (max-width: 760px) {
    .cards {
      width: 100%;
      justify-content: center;
      margin: 0 auto !important;
    }
  }
`;

const StyledCard = styled(Card)`
  width: 200px;
  height: 240px;
`;

export const Skills = () => {
  return (
    <StyledSkills>
      <h2>Skills</h2>

      <div className="cards">
        <div>
          <StyledCard
            hoverable
            title={
              <Image
                alt="example"
                width={150}
                height={150}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw6BaPUhJMAROwqU2rlBJwLYs2i0y6J5OSkA&usqp=CAU"
              />
            }
          >
            <div>HTML</div>
          </StyledCard>
        </div>
        <div>
          <StyledCard
            hoverable
            title={
              <Image
                alt="example"
                width={150}
                height={150}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
              />
            }
          >
            <div>CSS</div>
          </StyledCard>
        </div>
        <div>
          <StyledCard
            hoverable
            title={
              <Image
                alt="example"
                width={150}
                height={150}
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQEA4QDw8TEA8OERAPDxAOEBARDg4OFhgZGhYSFhQZHioiGRsoHhYUIzMkJys6MDEwGyE2OzYwOyowMDABCwsLDw4PGxERGToeHyctLS0tMi0vLzEvLy0tLS8tLy8wLy8vLS0vLy0vLy8vLy8vLy0xLS8vLS8tLy8vLy8vL//AABEIAOsA1gMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQIEBQcGAwj/xABIEAACAQMAAwkKCwcEAwAAAAAAAQIDBBEFITEGEjJBUVJhcZEHExQicoGTobHSFRYXJEJTVHSywdEjMzSCkqKzNWJz4WPw8f/EABoBAQACAwEAAAAAAAAAAAAAAAABAgMEBQb/xAA1EQACAQICBggFBAMBAAAAAAAAAQIDEQQhBRIxUWGRFDJBcYGhsfATFSLB4TOi0fFCUnIj/9oADAMBAAIRAxEAPwDuIAAAAAAAAB8rivCnGU6klCEdcpTaUUutlpzUU5SeFFNtvYktrOTbpNOTu6reWqUG+9U+JLntc5+rYZaNJ1HuRirVVTXE9ZpHd5Sg97QpyrPnSfe4ebKy+xHn7vdteT4EoU1xd7ppvHXPJ5ts+lS2qRjv5UpxhzpQkodrWDfjQpx7L95oSr1Jdtu4y6+n7ufCuq38s5QXZHBh1LyrLhVakvKqTftZ8GyrZl1Uti8jE5Se1+bLSk3teeshVGtkmuptFWyrYBkw0jXjwa9WPk1akfYzMobp72nwbqr/ADtVPxpmnbIZDjF7V5IspS3+Z6+w7oVzBpVYU60ePV3qo/OtX9p7XQO6e3vPFpyca2MujUwqmONx4pLq8+DjLEZuLUotxlFpxlFtSjJbGmtjMM8PCWxWZlhiJx25n6DB4/cNuo8Ki6NdrwimsqWpd+gvpY4pLVledcePYHPlFxdmdCMlJXQABUsAAAAAAAAAAAAAAAAAAaLdnXdOxrtbZKNPzTklL1NnKGdO7oT+ZP8A5KftOYM6OE6nic7F9fwPfbgdCQ72rqcVKcpSVLfLKpxi8OSXObT18i6We1ks6nrT1NPY0eX7n2kI1LVUc+PQlNSjxuEpOUZdWtrzHqjTrtuo7+0blCypq3tnL93ehIW9SnVpRUadbfZgtUYVFjOFxJp7OLDPKtnt+6bpGMpUbeLTlTzVqY+i2sRj14y+zlPDNm/QbdNXNCukqjsGyrYbKNmUxBsqyWVYAZDYbKtgGRo2/lb1qVaHCpTU8c5fSj1NZXnO90qqnGMovMZpSi+VNZTPzyzu25mWbKyb2+DUP8cTSxaVk/A3cI9qNoADTNwAAAAAAAAAAAAAAAAAA8z3Qv4J/wDLT9rOXNnU93lCdSzcacJ1Jd8g97TjKcsa9eFrOcvQ119lr+gq+6dDCtKn4s5+Ki3UyXYjGtbmpSmp05yhOOyUHh9XSug29XdlfSjve/Y4nKNOmpvz41eYwHoa6+y1/QVfdKvQt19kr+gq+6ZpKDzdmYY/EWSuuZgzm225NuUm23Jtybe1tvayjZnvQt39kr+hq+6Q9C3f2S49BV90trLeRqS3GubIZnz0NdJNu1rpJNtujUSSW1t73UjXNkpp7GQ01tDZDZLZVsEBso2GyrYJDZ3bcv8AwNj92ofgicHbO8bl/wCBsfu1D8ETUxfVXebeF2s2oANE3QAAAAAAAAAAaXdDp+nZwTl49Safe6aeG/8Ac3xRJjFydkRKSirs285qKbk0ktbbeEl0s01zursqbw66k/8AxRlUX9UU16zm+ltL1rmW+q1G1nMacdVKHVH83r6TXs3YYRbZPkaU8W/8VzOnvdxZ86p6KRHx5s+dU9Gzl7ZVsv0SnxKdKqcDqPx7sudU9FIfHuy51T0UjljZDY6LT4jpVTgdT+PllzqnopD4+WXOqeikcpbKtjotPiOlVOB1f4/WXOqeikR8f7HnVPRSOUNlWOi0+JPSqnA6jpDdzZTo1YRlU306c4RzSljfOLSOWhsq2ZKdKNPYYqlWU9obKNktlWzIUIbKtktlWwSQ2d53LvFhZdFrQ/xxOCneNzP+n2f3Wj/jRp4zqpm1hOszP8Nhy+oeGw5fUa4HlFpKvw5fk6/wYmy8MhyvsZ9YTT2NPqNQIzaeU8PoLw0nUT+uKa4ZerZDoLsZugY1pX3617VtMk7FOpGpFSi7pmu007MAAuQYmkbuNClUqz4NOLk+V8kV0t4XnOQaRvp16k6tV5nN56IriiuhHtO6TeNU6NBPhydSfkx1RT87b/lPAs6GFhaOt2v0Ofip3lq9i9QyrZLKtm0apDZVslshsAhsq2S2VbIJDZRhlWAGQw2Q2AGyjYbKtgkNlWw2VbBIbKsMEAHeNzP+n2f3Wj/jRwc7zucWLCzT1NWtDPR+zRqYzqc/Q28J1mUIyCMng+w7gIyMkEEl6NTeSUlxbenlNynxrjNDk21hUzBdGr9PVg6miq31SpvtzX3+3IwV45KRlAA7hqnLd3lzv72ceKlCFJdm+f4/UecbM7Ttbf3VzPlrVceSpNL1JGvbOvTVoJcEcio7zb4hsq2GyGy5QNlWw2VbIJDZRslsqwAyrYYbAIbKtktlGwCGyGw2VbBYNlWw2QQAAEu16kltb5ADJ0bYyuK1KjDhVZxprH0U9supLL8x3yulClvY6koqEV0JYx2Hke57uTlbLwm4jivUjvadN7aNN7W+Sb9S1cbR6W+rb6WFsj6+k4mlcWoU3Z70u97eR08HRazftGNkjIyQeROqMkZGSpUkkz9FT1zj0Jr8/wAjXGVo6WKiXKmvzNjBT1cRDvtzy+5WqrwZuQAerOecLrT30pS50nLteT5tlqsd7KUea2uxlGztHFDZVsNlWyCQ2UbJbKMANkMlJtpJNttJJJttvYkuNnR9y24aEFGreRU6j1xovDp0/L58ujZ17SlSpGCuzJTpubsjwujtC3NzroUJzjz8KMP65YXrN7T7nl7JZc6MeiVSef7Ys6fO4hDxeTVhbF0Hxd8+KK87OTV0tTg7XS7k2b8MCrZ5+Rzh9ze8+tt/SVvcK/Jte/W2/pK3uHSfDpc32jw6XN9pi+dU9/7WZOgrd5nNvk1vfrbf0lb3Cr7md59bbekre4dL8OlzfaPDpc32kfOae/8Aax0FbvM5n8md79bb+kre4Pkzvfrbb0lb3Dpfh8uavWPD5c32j51T3/tY6Ct3mc6tu5hcN/tbilBctJTqPsaiew0BuNtbJqok6tWOvvtbDcPJWyPXt6TZyvpcSx2mNVrSlwm37Ow16+motWjd+S/nyMlPBKLvb7mTd3mfFhs45GGRkZOBXrzrS1p/0b0YqKsiMkAgwFxkgEZK3JB9rN/tKfWvWfDJ9LP95Dyl7S9F/wDpD/peolsZ6EAHszlnE9O0t5dXMObWq48nfNr1YMBs9Fu/tu931R8VWFOquzev1wZ5xs68HeKfA5FRWk1xZDZVslsoyxUMqwyVFtpRWZSaUVyyexAHve5roFSze1Y5w3C3T2ZWqVX2xXVLoPcXdx9GPnYs7aNvQp0o8GjTjBdLSxl9b1mEeX0ri5X1Yvb6fn+TuYWiox97QADgm4ACMgEkZIIyVuSSRkjJGStybElcjJBFyQRkEFCwIBGSpIyRkZIyVuSMmRo9Zqw6M+pMxcmx0LDMpy5Pa/8A4bGChr4inHinyz+xSq7QbNwAD2JzDwXdRs/Ft66XBcqMv5vGj+GXac+bO3ac0crm3q0Hq75HxZP6M1rjLzNI4lcUpU5ThOLjOEnCcXtjJPDR0MLO8NXcc/FQtPW3+p82yGGVZtGsGzM0Is3NonsdxQT6t/EwmzM0G/nVp94ofjiVlsfcWh1kdwvuA+tGuNjf8DsNceJ0l+t4L1Z6Gj1QAQaBlGSMjJXJUmxOSMkEZK3LEkZIIyVuSCAQVbJRJGSMkZKkjJGRkjJS5YZIySQVbJIN7oylvaaztl4z8+z1YNPaUN/OMeJ630I9KdzQ1C8pVn/yvV8sl4s1MVPJRAAPQGkDxe7fco7j5xbpd/xicNSVaK2NPnpauldR7QFoTcHdFZwU1Zn5+qwlCUozi4zi8SjNOMovkaetMo2dx0poS3ul84oxqNLClrjUS5FOOGl5zQ1e51ZyeVKvBckakWv7otm7HFRazVjSlhZrY7nKmzL0C/nVn94t/wAcTo/yb2f1tx/XS9wva9z21p1KdSNSu5UqkKsVKdNxcoSUkn4mzUS8TTaa+wjhpp3y5nqL7gdhrcmy0hwGazJ5DSX6/gvudqj1QRkZIOcZhkgjJBVskkgmCy4rlNn8HQ6e0z0MJUrpuFst7KTqRhtNUQbX4Ohyy7V+hHwbDll2r9DP8qxHDn+CPjw9o1WSMm2+DYcsu1foPguHLLt/6K/KsRw5/gnpFP2jUZK5Nx8Fw5Zdv/Q+Cqf+7tX6EfKMTw5/gnpFP2jTZIN18E0+WXav0HwTT5Zdq/Qj5RieHP8ABPSaftGlJhFtpJZb2JbWblaKp9L62ZVG3hDgxS/MvT0NVb+uSS4Zv0t72FZYqNskfDR1p3uOvhPb1GaAehpUo0oKEFZI0pScndgAGQqAAAAAAAAAYukeA+tGrybTSP7t9aNVk89pT9fwX3Nyh1RkjIyVOaZiSMkArcsE8bNqPr4VU577T45K5JjUnHqya7m0HFPaffwupz2R4XU577T4ZCTbwllvYlrbHx6v+75y/kakdx9vDKnPZHhlT6x9pMrGqlneauhpvs2mMyZ1MRDruS73JeojGD2WZ9/DKn1j7Te2zbhBvW3FNvleDzZ6S14EPJj7EdTQ9Sc5z1pN5La2+3iYMVFKKsu0+wAO+aQAAAAAAAAAAAAAAAAABiaS/dvrRqTd3NPfQlHlRo2ef0tFqrGXY16PP1RuYd3i0MkAjJybmwCMjJGSrZYZIyRkjJVsknJt9EUkoKf0p519Txj1GmNtoi4W9VN7U210p6/1OhopwWJWtudu/Lztcw4lPUyNoafTNBJxmtWdUul8T9puDSaXuVJqEXqjltrZnkOzpZwWGkpeHf8A1e/C5q4dP4isYB6S14EPJj7DztKm5yjFbZf+5PTRjhJLYlhGhoSDvOfZkvHb5IzYt5JFgAegNIAAAAAAAAAAAAAAAAAAGuvrPOZxWv6S5TYgw16EK8NSezzT3r3weRaMnF3R5tlcm9uLSE9q18qNfV0ZNcFqXqPO19G16b+la64beW3lc3YV4S25GDkjJerRlHhRx0vPtPmc2X0u0lZ8TYWewnJAIKXJAB9adtUlwYZ6cYXayYRdR2itZ8FfyQbSzeRV15tYcm1yN6ikIttJLLexLabGjop/TkkuRfqbKhbRgvFWOXjbOrR0XiKzTqvVXHN8s7eOzia0sRCOUczH0fZbxZlrm+xGeAeio0YUYKEFZL3zNKUnJ3YABlKgAAAAAAAAAAAAAAAAAAAAAAAA+U6EZbYp+bJ9QGr5MGP4HT5iCs6fMXZkyAYvgUv9FyRbXlv82fOFNR2JLqSPoAZVkrFQAAAAAAAAAAAAAAAAAAAAAAAAAAACGUYBfJXfnzZVgH174O+HyZUA+3fB3w+JABkd8J35jkoA++/LZPgiyAPsD5ougCQAAAAAAAAAAAf/2Q=="
              />
            }
          >
            <div>PYTHON</div>
          </StyledCard>
        </div>
        <div>
          <StyledCard
            hoverable
            title={
              <Image
                alt="example"
                width={150}
                height={150}
                src="data:image/jpeg;base64,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"
              />
            }
          >
            <div>JAVASCRIPT</div>
          </StyledCard>
        </div>
        <div>
          <StyledCard
            hoverable
            title={
              <Image
                alt="example"
                width={150}
                height={150}
                src="data:image/png;base64,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"
              />
            }
          >
            <div>TYPESCRIPT</div>
          </StyledCard>
        </div>
        <div>
          <StyledCard
            hoverable
            title={
              <Image
                alt="example"
                width={150}
                height={150}
                src="data:image/png;base64,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"
              />
            }
          >
            <div>REACT.JS</div>
          </StyledCard>
        </div>
        <div>
          <StyledCard
            hoverable
            title={
              <Image
                alt="example"
                width={150}
                height={150}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAhFBMVEX///8AAADd3d319fWurq5ycnLh4eFISEiKior8/Py/v7/R0dGAgIDw8PDOzs7ExMScnJxnZ2eioqK0tLSoqKjm5uYzMzNYWFiTk5Pr6+teXl64uLhhYWE7OzvIyMhKSkofHx8WFhYNDQ0mJiaWlpaEhIR5eXlBQUEdHR0vLy9SUlI4ODiaUFcAAAAJgklEQVR4nO2da1v6PAzG1+EJEDkIoqiIB/w/6vf/fg9NNk5ubZOmdJfr/cJLTlv5sbRJmnZZ9pfVjd2AxmsWuwGN1+whdguars4wdgsar1HsBjReo0HsFjRdw17sFjRdg/PYLWi8/sVuQOM17sduQdM1XcduQdOV/xe7BU1XV13EbkLT9TyJ3YKma/0cuwVNV08lt9qsmXqM3YSm620RuwVN15NKmUazRmoZuwkN1436jN2EhmugXmM3oem6Uyl6NetcXcVuQsN1pu5iN6HhypVK82ZGdZRK0atZL+oydhMarrVK0atZPaVuY7eh2ZoplaJXs16V6sRuQ7M1Vyl6NetDpejVrKVK0atZD0ql6NWsL5WiV7POlXqP3YZma6pS9GpWX6Xo1axNeJ+iV7P+bRClymGTrlWKXs16VCl6NetiQ+gk0ess1/Iz6EHOEkwtw3+ckqnu24YQFOhf8E5fyJ6JGyuQ10z4VLEE/swI/mWsRVhsPoaVwy+80xeaWs90jm8c09u405kHIviqjKyq/lne8N+5F6Iz66kKRMqn2N0LURf+fyGeEjqiIno9FSKfjs8LUXYDD4iLWlZqF71eeiFyNjQvUwNE626HqPLjV3D+nHJG3eqv8oHpHLk+9KXpLfZeeIvIw9QAkUdG4kd/npIW0x6RW+UwGCTVio8EiNbAiG1qvoge4PTuC1se3C3zAq8iLwGiaU//feIewxdRdguMnOs4vzZvdlwHI4ZohEMvt9bUG1HhnTmO/Do0c41eBRF1fEzNHxG4yo5XxlC/1T5UowQR4YmZQaE/IsiNKXXv8M6BfuPc9biSiPAfnqkJIMrugZHDVMYl6XIXRYTXOsvUJBBBeky9Wb0UQOke0okhgvTvDekK3pcIooGTA9unuQfCiLI119REEGXgeFiyiBjQEQ4qjCh7Z5qaDKLC0TeO5t+OHdZW0ohypqkJIcr+08cxlb1OyCeSRoR9IT1hLoUIfiLDgeD1r9qXqySOKLsjOLk7SSEqUpA3dS+/6ldpSVx5RDP96Jt6DDFE2NfUZYnHpX9CkDwitHZX776UHCKMg6qdfDgLdReHAIgwV040NTlEGAdVZgJn9vGuQiEQgQdHzEEJIso+gURFscc75/oWzBftPXFLb4okIkTxu2Tok+eQBEGEqSOSqYkiQoO6PnoWXW+6WxsGUYdsaqKIionLwyphDOAY2fUwiPAXs8+d7CSLqJh8PLhinvUznF2bAiHC5whjhzAiHPn3vTOYRrInSioUClFGNDVhRMXk4+Toca3TbVIwRH2aqUkjKiYfy1ADryrerk3BEJEmGQIgwsnHVfHgu9oNcFI4RDBn7uzsyyPan3zE2JY0n72TGKLfnmJ+2BuYJY+omHzUozzOjXwwjxMQEaaOHE0tAKLt5CPOOrB3bQqJCLoDR1MLgQiz1JfZkyJ6IIcKimjmbmohEBUGhgkkcvS6VVBEmDpyWl8BiMbDHkGP9nALJx+PvUiiwiKC1JGTqXGq1Bzyq//K93oU0AVGNHA1tUCIBsVbfcowxRDVTHrAyOtgaoEQFV21V8FzaERQi+ow3gZCVB6WXRqWnQARREf2OYdiROtSZG/ZbIuTP6CFR4TZdqupBRn0oVyvEH/dYnhE8LJ156QgiDDPjzMi/NWvJ0DUdTG1EIiQzaQI1thbFYghMlTM3Dhc6AEQYY5Iz3hgsMa9p8cpEEHVkcXUAiBCtxE69Vf4l+k+ngQRTGyZcxHyiDD4wFQs1oswK/BPgyi3ujHiiDCELY+IOTXezWFOgwh+UqOpSSPCRMguPMQ1eay844kQQdWRqSRaGhFOpO1yRNh3v0adJLIgmllMTRgRTsfutwk9AM5yMDFEtlhap44MBXSyiOBbHU29oh/JWJN/MkTQG9SbmiyiFVjV0ZPvR7bnqtMhGhj7S1FEWFp8bNYY09I3kT0dIogDaiMlSURYJfM7kYeZEfKU7AkRwShTR0EQEWYaq0qtnva8SXedElHHYGqCiDDwqIo2cEKNGojQEHV7w/IrPl4vFtc4qgIilyCxV29qcoiuDJdKv/YCM4iGqFPmFNDcFVaCOSOCkLuagxgirJKpO9J9TTdlEhkRVBBqQqvxeIWM3BFltaYmhQi96PpkOVohKRDhISr7Ho2KhEj/xquqF6QQ4c4W9ZWo2JdXNqFOLET59tt86HVL56XFOei6ZtgVQgTTv8ZgCLsISs0jC9FyW07UWS4fSIjA8a1YDSaDKHf4/uhXEuYeuVfRz17MTEKkv0XFTf5kEL2q6qMfaGWxxWPx+iLtX9z3S0okRDCo/DY1EUSYo7bNQF5YevTK95MRoX+hXkaQtKchgtTRL1OTQPToOKJjh+WyoB/EQ5TNis3B1LhLRqTDyV97xAggwuJGF78Qhz3X9bFMRNrRvoL1i18FIkLko3/F4wUaAoigOU7RBTpPrrUQbETw8APGBioi2G3h6Df0R4S7A7k1A11wx707vBCB+a/piAa/Tc0b0VJRjoCBnFvlvBuiznAI48QAB6OzUTndAszIiCB1dMjaF5Et8DgWFK671UJYET0MsAFQoTPcbp9S2ElPjyB0RNBhHnzCF9E30dnBvt2pFsKGaIrR1x1clfkrRoB9tRejPXAQ6R/9bf8JT0Q4lUjZicO9FsKG6A57tWUxxhflXtA1/jwXbggDEcDdb58fIpfA41jOtRA2RNdFp4Zu2XYQ2O53qn84DiL40N5n/BBBU6j3LndNQVr7ol7hE3Zv15+jvTzL8OPzeoTfkYUIZpR3DwHRed4nChuEFwR1NhovPftoLpa7Jq+GuzkwDebuoIvdZ+n752MHZl09Ew8RpI62n2Ii0hPQOD/G2VjKrRYiIiLISpRBgAcirPnk1FdhCtJWCyGBaMxEpDuD0tSY+13PyxQZa9VrUQthuQChz4p1J1Ad4qVbbpn1rTw3W//76ire7gJtUj+ZmlWjZGpWzT3va9AC6e6IW1ffFvWTqVk1SqZm1dxv7Wob1GWGWG1SnkzNqkkyNasWydRs6r55rRNvhfJkalZNkqlZtUj3lbRp0x1x79bTGuXJ1KyaJFOzapFMzaZNd5RMzaKcd7eeVmma7rlt1RP9FiJtU9dne8GWKE+mZtU0mZpVC89ClTbIZ/u8lugimZpV05/YLWi+5pRbiLRU/A28W6M8mZpVE97WcK3SnL8pbGvE3IWxTcq59+1okSa0e5e2UuLbX/89dZIDaVXOvNFSm7RMdaJWUW7q3lJ1/8a82v/itlwBGdYyKgAAAABJRU5ErkJggg=="
              />
            }
          >
            <div>NEXT.JS</div>
          </StyledCard>
        </div>
        <div>
          <StyledCard
            hoverable
            title={
              <Image
                alt="example"
                width={150}
                height={150}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAn1BMVEX///9UxfgBV5sptvZOw/hmyvnd8v265fzY8P2lu9NBwfgATZYAUZjx+v77/f4ktfYAsfbn9v4uaqXR7f0BU5TM2OYARZMBUI4osO4AI0EAK0wBTYkBWJ0BR34BQXQGSHoBPm4EKkUANmA9aJEAP3wsY5kAQ3oGQ3EFPmgAPG4ANWIFNVgAL1cELk0AJ0kBP3AApOXM0tkANHoXYKC6y97IGlOJAAADcUlEQVR4nO3b63LSUBSGYUrSg2gPWCxbIJCi0gp49v6vzRDSGmiyj072WsvvuwAmz7wrk/5pr4dhGIZhGIZh5p2dh+w29uObdzFI/Tc4vYr9/MZdDE78l8oHxn5881AQBYkPBVGQ+ADUA3Gi0YeCKEh8KIiCxAegHogTjT4UREHiQ0EUJD4A9UCcaPShIAoSHwqiIPEBqAfiRKMPBVGQ+FAQBYkPQD0QJxp9KIiCxIeCKEh8AOqBONHoQ0EUJD4UREHiA1APxIlGHwqiIPGhIAoSH4B6IE40+lAQBYkPBVGQ+ADUA3Gi0YeCKEh8KIiCxAegHvifn+jlWdAoAPUFh+kgZEMCQP2PD9M04MdPLgkATQVDgCkFoP7HUZA+UP/jAHYAvJJ+okENORQMIvIoGEDkUtCbyOFDH0TkVNCLyOcd9CRyK+hM5Ah0IvI7UUciz4IORK4FrYl8C1oSeX3oPYi8C1oQOb+DVkRjwYQ+UEs0Aq+vE/pADdF4ogUw8SV2CGwl2hRMfImdAluIdgU9iR0DG4m2Bb2InQMbiPYFPYgdfOhf7ohoLHhTBzoSIxTc7YDoVtCRGAl4QHR5B52J0YA1og/QmhgR+Ex0P1EHYlRgRfQraEmMDCyJvgWtiNGBO6J3QQsiAWBB9C9oJEb50Dvu+EPvRCRR0DBTQS1RCrCVKAfYQpQEbCTKAjYQpQFfEOUBj4gSgQdEGR96DVFmwRpRLrAiSgaWRNnAgsgBeBYATJJT+sDe7U0AUH2I/fg2CyCqxcdP9P/xJIS4WI3fvBVMVAVw1BdM3AP7colqkZVAscSngmKJBXA6ehJKJKqHOlAgcQcc14XSiBWwLpRFVA/zEngglERUj5+zBqEc4h7YIJRCLIHNQhlE9bhetQolENVmPf8rFEhUm22+ykphc0TuRPVlm8/1Qt7EArjMyyNtvVLeRHX/dbl+btgq5EtU9++3NeHxX238iQVwUgrnWXmmrT6uxB2wEu5exFF/1g5kSSyBpfDbPBv39T6OxD1wslku82xk0nEkVsDJdj6ezayAzIgVMJ/a6rgRS+B6anz32BIL4DLrO+XjRfw+ycfuOE7EHz/Hmm+7COK7O28giGQGIogg0hiIIIJIYyCCCCKNgQgiiDQGIohMiK/9d/eLBfFVyH7HfnwMwzAMwzDsn+wPbQGkKIZ+27AAAAAASUVORK5CYII="
              />
            }
          >
            <div>FLUTTER</div>
          </StyledCard>
        </div>
      </div>
    </StyledSkills>
  );
};
